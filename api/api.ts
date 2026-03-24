// URL da API vinda das variáveis de ambiente do Expo
const API_URL = process.env.EXPO_PUBLIC_API_URL; 

// Função que envia dados para a IA
export const enviarParaIA = async (
  texto: string,        // preferências do usuário
  cardapio: any[]       // lista de itens disponíveis
): Promise<any> => {

  try {
    // Faz requisição POST para sua API
    const response = await fetch(API_URL as string, {
      method: "POST",
      
      // Define que o corpo é JSON
      headers: { "Content-Type": "application/json" },
      
      // Envia os dados
      body: JSON.stringify({ texto, cardapio }),
    });

    // Converte resposta para JSON
    return await response.json();

  } catch (error) {
    // Se der erro (internet, API offline, etc)
    console.error("Erro na API:", error);

    // Retorno padrão (fallback)
    return { recomendados: [] };
  }
};