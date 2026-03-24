// Importa o card de item
import { ItemCard } from "@/components/Card";

// Listas do cardápio
import { bebidas } from "@/components/Card/cardapio/bebidas";
import { burguers } from "@/components/Card/cardapio/burguers";
import { sobremesas } from "@/components/Card/cardapio/sobremesas";

// Estilos específicos da tela de resultado
import { resStyles } from "@/constants/resStyles";

// Navegação
import { Stack, router, useLocalSearchParams } from "expo-router";

// Hooks
import { useEffect, useState } from "react";

// Componentes RN
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from "react-native";

// Função que envia dados para IA
import { enviarParaIA } from "../api/api";

// Estilos gerais
import { styles } from '../constants/styles';

// Tipo do item no carrinho
type ItemCarrinho = {
  id: number;
  nome: string;
  valor: number;
  desc: string;
  tipo: any;
  qtd: number;
};

export default function Resultado() {

  // Parâmetros vindos da tela anterior
  const { selecionados, tipo } = useLocalSearchParams();

  // Estado dos itens recomendados pela IA
  const [recomendados, setRecomendados] = useState<any[]>([]);

  // Loading da IA
  const [carregando, setCarregando] = useState(true);

  // Carrinho local
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);

  // Atualiza carrinho (mesma lógica do menu)
  const atualizarCarrinho = (item: any, qtd: number) => {
    setCarrinho(prev => {
      const existe = prev.find(i => i.id === item.id);

      if (qtd === 0) {
        return prev.filter(i => i.id !== item.id);
      }

      if (existe) {
        return prev.map(i =>
          i.id === item.id ? { ...i, qtd } : i
        );
      }

      return [...prev, { ...item, qtd }];
    });
  };

  // Executa quando a tela carrega
  useEffect(() => {
    const filtrarTudo = async () => {
      try {
        // Converte JSON das preferências
        const escolhas = JSON.parse((selecionados as string) || "{}");

        // Separa o que quer e evita
        const quero = Object.keys(escolhas).filter(k => escolhas[k] === 'quero');
        const evito = Object.keys(escolhas).filter(k => escolhas[k] === 'evito');

        // Cria texto para IA
        const promptTexto = `Quero: ${quero.join(", ")}. Evito: ${evito.join(", ")}.`;

        // Junta todo o cardápio
        const superLista = [...burguers, ...bebidas, ...sobremesas];

        // Envia para IA
        const data = await enviarParaIA(promptTexto, superLista);

        // Processa resposta
        if (data?.recomendados) {
          const filtrados = data.recomendados.map((rec: any) => {

            // Busca item original pelo ID
            const itemOriginal = superLista.find(i => i.id === rec.id);

            return itemOriginal ? { ...itemOriginal } : null;

          }).filter((i: any) => i !== null);

          setRecomendados(filtrados);
        }

      } catch (err) {
        console.error("Erro na filtragem:", err);
      } finally {
        setCarregando(false);
      }
    };

    filtrarTudo();
  }, [selecionados]);

  // Renderiza cada categoria
  const renderCategoria = (titulo: string, tipoFiltro: string) => {

    // Filtra itens por tipo
    const itens = recomendados.filter(item => item.tipo === tipoFiltro);

    if (itens.length === 0) return null;

    return (
      <View style={{ marginBottom: 30 }}>

        {/* Header da categoria */}
        <View style={resStyles.headerCategoria}>
          <Text style={resStyles.tituloCategoria}>{titulo}</Text>
        </View>

        {/* Lista de itens */}
        {itens.map((item) => {

          const itemNoCarrinho = carrinho.find(c => c.id === item.id);

          return (
            <View key={`${item.tipo}-${item.id}`} style={{ marginBottom: 20 }}>
              <ItemCard
                {...item}

                // 🔥 mantém sincronizado com carrinho
                qtd={itemNoCarrinho?.qtd || 0}

                // atualiza carrinho
                onChangeQtd={(novaQtd) => atualizarCarrinho(item, novaQtd)}
              />
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>

      {/* Remove header */}
      <Stack.Screen options={{ headerShown: false }} />

      {/* Título dinâmico */}
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333', marginTop: 40 }}>
        {carregando ? "Filtrando o Cardápio..." : "Sua Seleção Personalizada"}
      </Text>

      {/* Loading */}
      {carregando && (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" color="#2E7D32" />
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Aguarde...</Text>
        </View>
      )}

      {/* Lista */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {!carregando && (
          <>
            {renderCategoria("Hambúrgueres", "Burguer")}
            {renderCategoria("Bebidas", "Bebida")}
            {renderCategoria("Sobremesas", "Sobremesa")}
          </>
        )}
      </ScrollView>

      {/* Footer */}
      {!carregando && (
        <View style={resStyles.footer}>

          {/* Refazer */}
          <TouchableOpacity
            style={[styles.botao, { flex: 1 }]}
            onPress={() => router.push({ pathname: '/preferencias', params: { tipo } })}
          >
            <Text style={styles.textoBotao}>Refazer</Text>
          </TouchableOpacity>

          {/* Carrinho */}
          <TouchableOpacity
            style={[styles.botao, { flex: 1 }]}
            onPress={() =>
              router.push({
                pathname: '/carrinho',
                params: {
                  tipo,
                  carrinho: JSON.stringify(carrinho)
                }
              })
            }
          >
            <Text style={styles.textoBotao}>Carrinho</Text>
          </TouchableOpacity>

        </View>
      )}
    </View>
  );
}