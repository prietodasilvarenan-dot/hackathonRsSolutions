import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../constants/styles';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function Resultado() {
  const colorScheme = useColorScheme();
  const { tipo } = useLocalSearchParams()
  return (

    <>
      {/* COMENTARIOS */}
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>

        <Text style={styles.titulo}>Resultado da Filtragem</Text>

        <View style={styles.horizontal}>

          <TouchableOpacity
            style={styles.botao}
            onPress={() =>
              router.push({
                pathname: '/preferencias',
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
