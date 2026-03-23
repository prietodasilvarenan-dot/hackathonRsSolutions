import 'react-native-reanimated';

import { ItemCard } from '@/components/Card/';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../constants/styles';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function Carrinho() {
  const colorScheme = useColorScheme();

  const { tipo, carrinho } = useLocalSearchParams();

  // 🔥 AGORA TEM ESTADO LOCAL
  const [itens, setItens] = useState<any[]>(
    carrinho
      ? JSON.parse(carrinho as string).filter((i: any) => i.qtd > 0)
      : []
  );

  // 🔥 ATUALIZA ITEM NO CARRINHO
  const atualizarItem = (id: number, qtd: number) => {
    setItens(prev => {
      if (qtd === 0) {
        return prev.filter(i => i.id !== id);
      }

      return prev.map(i =>
        i.id === id ? { ...i, qtd } : i
      );
    });
  };

  // 🔥 TOTAL DINÂMICO
  const totalGeral = itens.reduce((acc: number, item: any) => {
    return acc + item.valor * item.qtd;
  }, 0);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={{ flex: 1 }}>

        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>

          <Text style={styles.titleCard}>
            Seu Carrinho
          </Text>

          {itens.length === 0 ? (
            <Text style={{ marginLeft: 16 }}>Carrinho vazio</Text>
          ) : (
            itens.map((item: any) => (
              <ItemCard
                key={item.id}
                {...item}

                // 🔥 AGORA FUNCIONA DE VERDADE
                onChangeQtd={(qtd) => atualizarItem(item.id, qtd)}
              />
            ))
          )}

          {/* 🔥 TOTAL ATUALIZA AUTOMATICAMENTE */}
          {itens.length > 0 && (
            <Text style={[styles.titleCard, { marginTop: 10 }]}>
              Total: R$ {totalGeral.toFixed(2).replace(".", ",")}
            </Text>
          )}

        </ScrollView>

        <View style={styles.navbar}>

          <TouchableOpacity
            style={[styles.botao, { flex: 1 }]}
            onPress={() => router.back()}
          >
            <Text style={styles.textoBotao}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botaoSecundario, { flex: 1 }]}
            onPress={() =>
              router.push({
                pathname: '/modal'
              })
            }
          >
            <Text style={styles.textoBotao}>Comprar</Text>
          </TouchableOpacity>

        </View>

      </View>
    </>
  );
}