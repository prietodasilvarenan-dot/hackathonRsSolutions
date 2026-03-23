import os
import json
from fastapi import FastAPI
from pydantic import BaseModel
from dotenv import load_dotenv
import google.generativeai as genai # Mantendo a lib que você já tem
from fastapi.middleware.cors import CORSMiddleware
from typing import List

load_dotenv()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# CONFIGURAÇÃO: Removendo o 'transport' e deixando a lib decidir a melhor rota
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# TESTE: Tente SEM o prefixo 'models/' se com ele deu 404
model = genai.GenerativeModel("gemini-1.5-flash")

class ItemCardapio(BaseModel):
    id: int  
    nome: str
    valor: float 
    desc: str   

class DadosRecomendacao(BaseModel):
    texto: str
    cardapio: List[ItemCardapio]

@app.post("/recomendar")
async def recomendar(dados: DadosRecomendacao):
    # Formata o cardápio de um jeito que a IA não ignore o final
    cardapio_formatado = ""
    for item in dados.cardapio:
        cardapio_formatado += f"PRODUTO ID {item.id}: {item.nome}. DESCRIÇÃO: {item.desc}\n"

    prompt = f"""
    Você é um garçom digital. Analise estes itens:
    {cardapio_formatado}

    PREFERÊNCIAS: {dados.texto}

    REGRAS:
    - Retorne TODOS os IDs que fazem sentido (Lanches, Bebidas e Doces).
    - Se o cliente não restringiu bebidas, sugira as que combinam.
    - Retorne APENAS o JSON: {{"recomendados": [ {{"id": 1}} ]}}
    """
    
    try:
        response = model.generate_content(prompt)
        res_text = response.text.strip()
        
        # Limpeza de segurança
        res_clean = res_text.replace("```json", "").replace("```", "").strip()
        
        print(f"IA RESPONDEU: {res_clean}")
        return json.loads(res_clean)
        
    except Exception as e:
        print(f"ERRO NA IA: {e}")
        # FALLBACK: Retorna IDs de 1 a 15 (ajuste conforme seus IDs) 
        # para garantir que venha lanche, bebida e sobremesa na sua tela.
        # No hackathon, é melhor o usuário filtrar o que não quer do que ver nada.
        ids_seguros = [item.id for item in dados.cardapio]
        return {"recomendados": [{"id": i} for i in ids_seguros]}