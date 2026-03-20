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
        <Text>O que você gostaria de evitar em seu prato?</Text>
        <Text>1 ----  ---       2 ----  ---</Text>
        <Text>3 ----  ---       4 ----  ---</Text>
        <Text>5 ----  ---       6 ----  ---</Text>
        <Text>7 ----  ---       8 ----  ---</Text>
        <Text>9 ----  ---       10 ---  ---</Text>
        <Text>11 ---  ---       12 ---  ---</Text>
        <Button title="Proximo" onPress={() => router.push('/resultado')}></Button>
      </View>
    </ThemeProvider>
  );
}
