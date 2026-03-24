// Importa o sistema de rotas do Expo Router
// "router" serve para navegar entre telas
// "Stack" permite configurar opções da tela (como header)
import { router, Stack } from 'expo-router';

// Componentes básicos do React Native
import { Text, TouchableOpacity, View } from 'react-native';

// Importa os estilos definidos em outro arquivo
import { styles } from '../constants/styles';

// Componente principal da tela Home
export default function Home() {
  return (
    <>
      {/* Configuração da tela: remove o header (barra superior) */}
      <Stack.Screen options={{ headerShown: false }} />

      {/* View principal da tela */}
      <View style={styles.main}>

        {/* Título principal */}
        <Text style={styles.titulo}>
          Seja bem vindo ao nosso Estabelecimento!
        </Text>

        {/* Subtítulo com pergunta para o usuário */}
        <Text style={styles.subtitulo}>
          Deseja consumir em viagem ou no local?
        </Text>

        {/* Container dos botões */}
        <View style={styles.container}>

          {/* Botão "Viagem" */}
          <TouchableOpacity
            style={styles.botaoSecundario}
            // Quando clicado, navega para a tela "consulta"
            // passando um parâmetro "tipo=viagem"
            onPress={() => router.push('/consulta?tipo=viagem')}
          >
            <Text style={styles.textoBotao}>Viagem</Text>
          </TouchableOpacity>

          {/* Botão "Local" */}
          <TouchableOpacity
            style={styles.botaoSecundario}
            // Navega para a mesma tela, mas com "tipo=local"
            onPress={() => router.push('/consulta?tipo=local')}
          >
            <Text style={styles.textoBotao}>Local</Text>
          </TouchableOpacity>

        </View>
      </View>
    </>
  );
}