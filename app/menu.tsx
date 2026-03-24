import { ItemCard, ItemCardProps } from "@/components/Card/";
import { styles } from "@/constants/styles";
import { Stack, router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { bebidas } from "../components/Card/cardapio/bebidas";
import { burguers } from "../components/Card/cardapio/burguers";
import { sobremesas } from "../components/Card/cardapio/sobremesas";

type ItemCarrinho = {
  id: number;
  nome: string;
  valor: number;
  desc: string;
  tipo: any;
  qtd: number;
};

export default function Menu() {
  const { tipo } = useLocalSearchParams();

  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);

  const atualizarCarrinho = (item: ItemCardProps, qtd: number) => {
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

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={{ flex: 1 }}>

        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>

          <Text style={styles.titleCard}>Burgers</Text>

          {burguers.map(item => {
            const itemCarrinho = carrinho.find(i => i.id === item.id);

            return (
              <ItemCard
                key={item.id}
                {...item}
                qtd={itemCarrinho?.qtd || 0} // 🔥 ESSENCIAL
                onChangeQtd={(qtd) => atualizarCarrinho(item, qtd)}
              />
            );
          })}

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

        <View style={styles.navbar}>

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

      </View>
    </>
  );
}