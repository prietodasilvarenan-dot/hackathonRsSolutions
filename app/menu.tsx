// Importa o componente de item e suas props
import { ItemCard, ItemCardProps } from "@/components/Card/";

// Estilos
import { styles } from "@/constants/styles";

// Navegação
import { Stack, router, useLocalSearchParams } from "expo-router";

// React
import React, { useState } from "react";

// Componentes RN
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

// Listas do cardápio
import { bebidas } from "../components/Card/cardapio/bebidas";
import { burguers } from "../components/Card/cardapio/burguers";
import { sobremesas } from "../components/Card/cardapio/sobremesas";

// Tipo do item no carrinho
type ItemCarrinho = {
  id: number;
  nome: string;
  valor: number;
  desc: string;
  tipo: any;
  qtd: number;
};

export default function Menu() {

  // Parâmetro vindo da tela anterior (viagem/local)
  const { tipo } = useLocalSearchParams();

  // Estado do carrinho
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);

  // Função que atualiza o carrinho
  const atualizarCarrinho = (item: ItemCardProps, qtd: number) => {
    setCarrinho(prev => {

      // Verifica se item já existe no carrinho
      const existe = prev.find(i => i.id === item.id);

      // Se qtd = 0 → remove
      if (qtd === 0) {
        return prev.filter(i => i.id !== item.id);
      }

      // Se já existe → atualiza quantidade
      if (existe) {
        return prev.map(i =>
          i.id === item.id ? { ...i, qtd } : i
        );
      }

      // Se não existe → adiciona no carrinho
      return [...prev, { ...item, qtd }];
    });
  };

  return (
    <>
      {/* Remove header */}
      <Stack.Screen options={{ headerShown: false }} />

      <View style={{ flex: 1 }}>

        {/* Lista rolável */}
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>

          {/* BURGERS */}
          <Text style={styles.titleCard}>Burgers</Text>

          {burguers.map(item => {
            // Busca quantidade atual no carrinho
            const itemCarrinho = carrinho.find(i => i.id === item.id);

            return (
              <ItemCard
                key={item.id}
                {...item}

                // 🔥 ESSENCIAL: mantém UI sincronizada com estado
                qtd={itemCarrinho?.qtd || 0}

                // Atualiza carrinho ao clicar +/-
                onChangeQtd={(qtd) => atualizarCarrinho(item, qtd)}
              />
            );
          })}

          {/* BEBIDAS */}
          <Text style={styles.titleCard}>Bebidas</Text>

          {bebidas.map(item => {
            const itemCarrinho = carrinho.find(i => i.id === item.id);

            return (
              <ItemCard
                key={item.id}
                {...item}
                qtd={itemCarrinho?.qtd || 0}
                onChangeQtd={(qtd) => atualizarCarrinho(item, qtd)}
              />
            );
          })}

          {/* SOBREMESAS */}
          <Text style={styles.titleCard}>Sobremesas</Text>

          {sobremesas.map(item => {
            const itemCarrinho = carrinho.find(i => i.id === item.id);

            return (
              <ItemCard
                key={item.id}
                {...item}
                qtd={itemCarrinho?.qtd || 0}
                onChangeQtd={(qtd) => atualizarCarrinho(item, qtd)}
              />
            );
          })}

        </ScrollView>

        {/* Navbar */}
        <View style={styles.navbar}>

          {/* Voltar */}
          <TouchableOpacity
            style={[styles.botao, { flex: 1 }]}
            onPress={() =>
              router.push({
                pathname: '/consulta',
                params: { tipo }
              })
            }
          >
            <Text style={styles.textoBotao}>Voltar</Text>
          </TouchableOpacity>

          {/* Ir para carrinho */}
          <TouchableOpacity
            style={[styles.botao, { flex: 1 }]}
            onPress={() =>
              router.push({
                pathname: '/carrinho',
                params: {
                  tipo,
                  // Envia carrinho como JSON
                  carrinho: JSON.stringify(carrinho)
                }
              })
            }
          >
            <Text style={styles.textoBotao}>Carrinho</Text>
          </TouchableOpacity>

        </View>

      </View>
    </>
  );
}