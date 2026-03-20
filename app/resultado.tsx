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
        <Text>Aqui estão seus pratos de acordo com seus gostos!</Text>
        <Text>1 ----  ---       2 ----  ---</Text>
        <Text>3 ----  ---       4 ----  ---</Text>
        <Text>5 ----  ---       6 ----  ---</Text>
        <Text>7 ----  ---       8 ----  ---</Text>
        <Text>9 ----  ---       10 ---  ---</Text>
        <Text>11 ---  ---       12 ---  ---</Text>
        <Button title="Ir ao Carrinho" onPress={() => router.push('/carrinho')} />
        <Button title="Refazer" onPress={() => router.push('/preferencias')} />
      </View>
    </ThemeProvider>
  );
}
