import 'react-native-reanimated';


import { useColorScheme } from '@/hooks/use-color-scheme';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../constants/styles';
import BebidasList from './cardapios/bebidas';
import { BurguersList } from './cardapios/burguers';
import SobremesasList from './cardapios/sobremesas';
export const unstable_settings = {
    anchor: '(tabs)',
};

export default function Menu() {
  const colorScheme = useColorScheme();
  const { tipo } = useLocalSearchParams()

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container }>
        <Text style={styles.titulo}>Cardapio</Text>

        <ScrollView style={{ marginTop: 20 }}>
          <BurguersList />
          <BebidasList />
          <SobremesasList />
        </ScrollView>

        <View style={styles.horizontal}>
      
          <TouchableOpacity
            style={styles.botao}
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
            style={styles.botao}
            onPress={() => 
              router.push({
                pathname: '/carrinho',
                params: { tipo }
              })
            }
          >
            <Text style={styles.textoBotao}>Ir ao Carrinho</Text>
          </TouchableOpacity>

        </View>
      </View>
    </>
  );
}