// Necessário para animações no React Native (principalmente se usar reanimated em outras telas)
import 'react-native-reanimated';

// Hook personalizado para detectar tema (claro/escuro)
import { useColorScheme } from '@/hooks/use-color-scheme';

// Importa navegação e utilitário para pegar parâmetros da rota
import { router, Stack, useLocalSearchParams } from 'expo-router';

// Componentes básicos do React Native
import { Text, TouchableOpacity, View } from 'react-native';

// Importa estilos
import { styles } from '../constants/styles';

// Configuração do Expo Router
// Define que essa tela está ancorada dentro de um grupo de rotas chamado "(tabs)"
export const unstable_settings = {
  anchor: '(tabs)',
};

// Componente da tela Consulta
export default function Consulta() {

  // Detecta o tema atual (claro/escuro)
  const colorScheme = useColorScheme();

  // Pega os parâmetros passados pela rota (ex: tipo=viagem ou tipo=local)
  const { tipo } = useLocalSearchParams();

  return (
    <>
      {/* Remove o header padrão */}
      <Stack.Screen options={{ headerShown: false }} />

      {/* Container principal */}
      <View style={styles.main}>

        {/* Pergunta ao usuário */}
        <Text style={styles.titulo}>
          Gostaria de usar uma IA para filtrar seus pratos?
        </Text>

        {/* Container dos botões */}
        <View style={styles.container}>

          {/* Botão: usar IA */}
          <TouchableOpacity
            style={styles.botaoSecundario}
            onPress={() =>
              router.push({
                // Navega para tela de preferências
                pathname: '/preferencias',
                // Passa o parâmetro "tipo" junto
                params: { tipo }
              })
            }
          >
            <Text style={styles.textoBotao}>Usar IA!</Text>
          </TouchableOpacity>

          {/* Botão: fluxo normal */}
          <TouchableOpacity
            style={styles.botaoSecundario}
            onPress={() =>
              router.push({
                // Vai direto para o menu
                pathname: '/menu',
                params: { tipo }
              })
            }
          >
            <Text style={styles.textoBotao}>Pedir normalmente</Text>
          </TouchableOpacity>

        </View>
      </View>

      {/* Navbar inferior */}
      <View style={styles.navbar}>

        {/* Botão de voltar para a Home */}
        <TouchableOpacity
          style={[styles.botao, { flex: 1 }]}
          onPress={() => router.push('/')}
        >
          <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableOpacity>

      </View>
    </>
  );
}