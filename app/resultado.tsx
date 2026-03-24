import { ItemCard } from "@/components/Card";
import { bebidas } from "@/components/Card/cardapio/bebidas";
import { burguers } from "@/components/Card/cardapio/burguers";
import { sobremesas } from "@/components/Card/cardapio/sobremesas";
import { resStyles } from "@/constants/resStyles";
import { Stack, router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { enviarParaIA } from "../api/api";
import { styles } from '../constants/styles';

type ItemCarrinho = {
  id: number;
  nome: string;
  valor: number;
  desc: string;
  tipo: any;
  qtd: number;
};

export default function Resultado() {
  const { selecionados, tipo } = useLocalSearchParams();
  const [recomendados, setRecomendados] = useState<any[]>([]);
  const [carregando, setCarregando] = useState(true);

  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);

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

  useEffect(() => {
    const filtrarTudo = async () => {
      try {
        const escolhas = JSON.parse((selecionados as string) || "{}");
        const quero = Object.keys(escolhas).filter(k => escolhas[k] === 'quero');
        const evito = Object.keys(escolhas).filter(k => escolhas[k] === 'evito');

        const promptTexto = `Quero: ${quero.join(", ")}. Evito: ${evito.join(", ")}.`;
        const superLista = [...burguers, ...bebidas, ...sobremesas];

        const data = await enviarParaIA(promptTexto, superLista);

        if (data?.recomendados) {
          const filtrados = data.recomendados.map((rec: any) => {
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

  const renderCategoria = (titulo: string, tipoFiltro: string) => {
    const itens = recomendados.filter(item => item.tipo === tipoFiltro);
    if (itens.length === 0) return null;

    return (
      <View style={{ marginBottom: 30 }}>
        <View style={resStyles.headerCategoria}>
          <Text style={resStyles.tituloCategoria}>{titulo}</Text>
        </View>
        {itens.map((item) => {
          const itemNoCarrinho = carrinho.find(c => c.id === item.id);

          return (
            <View key={`${item.tipo}-${item.id}`} style={{ marginBottom: 20 }}>
              <ItemCard
                {...item}
                qtd={itemNoCarrinho?.qtd || 0} 
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
      <Stack.Screen options={{ headerShown: false }} />

      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333', marginTop: 40 }}>
        {carregando ? "Filtrando o Cardápio..." : "Sua Seleção Personalizada"}
      </Text>

      {carregando && (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" color="#2E7D32" />
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Aguarde...</Text>
        </View>
      )}

      <ScrollView showsVerticalScrollIndicator={false}>
        {!carregando && (
          <>
            {renderCategoria("Hambúrgueres", "Burguer")}
            {renderCategoria("Bebidas", "Bebida")}
            {renderCategoria("Sobremesas", "Sobremesa")}
          </>
        )}
      </ScrollView>

      {!carregando && (
        <View style={resStyles.footer}>
          <TouchableOpacity
            style={[styles.botao, { flex: 1 }]}
            onPress={() => router.push({ pathname: '/preferencias', params: { tipo } })}
          >
            <Text style={styles.textoBotao}>Refazer</Text>
          </TouchableOpacity>

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
