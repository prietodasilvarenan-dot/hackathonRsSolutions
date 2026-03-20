import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View>
        <Text>Seja muito bem vindo ao Restaurante!</Text>
        <Text>Gostaria de consumir em Viagem ou no Estabelecimento?</Text>
        <Button title="Viagem" onPress={() => router.push('/consulta')}></Button>
        <Button title="local" onPress={() => router.push('/consulta')} />
      </View>
    </ThemeProvider>
  );
}
