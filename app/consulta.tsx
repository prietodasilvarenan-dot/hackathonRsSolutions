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
        <Text>Gostaria de Usar uma IA para filtrar seus pratos?</Text>
        <Button title="Usar IA!" onPress={() => router.push('/preferencias')}></Button>
        <Button title="Pedir normalmente" onPress={() => router.push('/menu')}></Button>
      </View>
    </ThemeProvider>
  );
}
