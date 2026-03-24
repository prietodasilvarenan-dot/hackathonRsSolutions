// Necessário para animações
import 'react-native-reanimated';

// Componente de item do carrinho/menu
import { ItemCard } from '@/components/Card/';

// Hook de tema (não está sendo usado aqui)
import { useColorScheme } from '@/hooks/use-color-scheme';

// Navegação e params
import { router, Stack, useLocalSearchParams } from 'expo-router';

// Hooks do React
import React, { useState } from 'react';

// Componentes do React Native
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

// Estilos
import { styles } from '../constants/styles';

// Configuração do router
export const unstable_settings = {
  anchor: '(tabs)',
};

// Tela do Carrinho
export default function Carrinho() {

  // Tema (não utilizado)
  const colorScheme = useColorScheme();

  // Parâmetros vindos da rota
  const { tipo, carrinho } = useLocalSearchParams();

  // Estado com os itens do carrinho
  const [itens, setItens] = useState<any[]>(
    carrinho
      // Se existir carrinho, converte de string para objeto
      ? JSON.parse(carrinho as string).filter((i: any) => i.qtd > 0)
      // Se não, começa vazio
      : []
  );

  // Função para atualizar quantidade de um item
  const atualizarItem = (id: number, qtd: number) => {
    setItens(prev => {

      // Se quantidade for 0, remove o item
      if (qtd === 0) {
        return prev.filter(i => i.id !== id);
      }

      // Senão, atualiza a quantidade
      return prev.map(i =>
        i.id === id ? { ...i, qtd } : i
      );
    });
  };

  // Calcula o total do carrinho
  const totalGeral = itens.reduce((acc: number, item: any) => {
    return acc + item.valor * item.qtd;
  }, 0);

  return (
    <>
      {/* Remove header */}
      <Stack.Screen options={{ headerShown: false }} />

      <View style={{ flex: 1 }}>

        {/* Lista de itens */}
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>

          {/* Título */}
          <Text style={styles.titleCard}>
            Seu Carrinho
          </Text>

          {/* Se vazio */}
          {itens.length === 0 ? (
            <Text style={{ marginLeft: 16 }}>Carrinho vazio</Text>
          ) : (
            // Lista de itens
            itens.map((item: any) => (
              <ItemCard
                key={item.id}
                {...item}

                // Quando muda a quantidade no card
                onChangeQtd={(qtd) => atualizarItem(item.id, qtd)}
              />
            ))
          )}

          {/* Total */}
          {itens.length > 0 && (
            <Text style={[styles.titleCard, { marginTop: 10 }]}>
              Total: R$ {totalGeral.toFixed(2).replace(".", ",")}
            </Text>
          )}

        </ScrollView>

        {/* Navbar inferior */}
        <View style={styles.navbar}>

          {/* Voltar */}
          <TouchableOpacity
            style={[styles.botao, { flex: 1 }]}
            onPress={() => router.back()}
          >
            <Text style={styles.textoBotao}>Voltar</Text>
          </TouchableOpacity>

          {/* Finalizar compra */}
          <TouchableOpacity
            style={[styles.botao, { flex: 1 }]}
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