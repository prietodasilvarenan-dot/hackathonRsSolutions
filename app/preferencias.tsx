import { Stack, router, useLocalSearchParams } from 'expo-router';
import React, { useState } from "react"; // Adicione o useState
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

// 1. Importe o componente e os estilos que criamos
import { PrefCard } from '@/components/Card/pref';
import { styles } from '../constants/styles';

export default function Preferencias() {
  const { tipo } = useLocalSearchParams();
  
  // 2. Estado para armazenar as escolhas de todos os cards
  // O formato será: { "Carne": "quero", "Ovo": "evito" }
  const [escolhas, setEscolhas] = useState<Record<string, 'quero' | 'evito' | null>>({});

  const preferencias = [
    "Carne",
    "Frango",
    "Bacon",
    "Calabresa",
    "Ovo",
    "Queijo",
    "Cheddar",
    "Hambúrguer Vegetal",
    "Vegetariano",
    "Vegano",
    "Alface",
    "Tomate",
    "Molho Especial",
    "Barbecue",
    "Maionese",
    "Doce",
    "Chocolate",
    "Leite Condensado",
    "Sorvete",
    "Frutas",
    "Refrigerante",
    "Suco Natural",
    "Bebida Gelada",
    "Álcool",
    "Cerveja",
    "Vinho",
    "Drink",
    "Artesanal",
    "Duplo",
    "Tradicional" 
  ];

  // Função para atualizar o estado quando um card for clicado
  const handleEscolha = (item: string, valor: 'quero' | 'evito' | null) => {
    setEscolhas(prev => ({
      ...prev,
      [item]: valor
    }));
  };

  const handleProximo = () => {
    // 3. Envia os dados para a próxima tela como uma String JSON
    router.push({
      pathname: '/resultado',
      params: { 
        tipo, 
        selecionados: JSON.stringify(escolhas) 
      }
    });
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
            
        <Text style={styles.titulo}>
          O que você gostaria de ter em seu prato?
        </Text>

        <ScrollView 
          contentContainerStyle={{ paddingBottom: 100 }} // Espaço para não cobrir o último item
          showsVerticalScrollIndicator={false}
        >
          {preferencias.map((pref) => (
            <PrefCard 
              key={pref} 
              title={pref} 
              // Passa a função que atualiza o estado da tela pai
              onSelect={(valor) => handleEscolha(pref, valor)} 
            />
          ))}
        </ScrollView>

        {/* Rodapé com Botões */}
        <View style={footerStyle.container}> 
          <TouchableOpacity
            style={[styles.botao, { flex: 1, backgroundColor: '#ccc' }]}
            onPress={() => router.push('/consulta')}
          >
            <Text style={styles.textoBotao}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botao, { flex: 1 }]}
            onPress={() => router.push('/resultado')}
          >
            <Text style={styles.textoBotao}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

// Estilo rápido para o rodapé fixo
const footerStyle = {
  container: {
    position: "absolute" as const,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row" as const,
    gap: 10,
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: '#eee'
  }
};