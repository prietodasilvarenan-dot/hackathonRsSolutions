// Importa navegação e Link (para navegar como se fosse um botão)
import { Link, Stack } from 'expo-router';

// Componentes do React Native
import { Text, TouchableOpacity, View } from 'react-native';

// Estilos
import { styles } from '../constants/styles';

// Tela de modal (confirmação de pedido)
export default function ModalScreen() {
  return (
    <>
      {/* Remove o header padrão */}
      <Stack.Screen options={{ headerShown: false }} />

      {/* Fundo escuro/transparente (overlay) */}
      <View style={styles.overlay}>

        {/* Caixa do modal */}
        <View style={styles.modal}>

          {/* Título */}
          <Text style={styles.titulo}>Pedido pronto!</Text>

          {/* Subtítulo */}
          <Text style={styles.subtitulo}>
            Seu pedido foi processado com sucesso.
          </Text>

          {/* Botão que volta para a Home */}
          {/* Link com asChild faz o TouchableOpacity funcionar como link */}
          <Link href="/" asChild>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>Voltar ao início</Text>
            </TouchableOpacity>
          </Link>

        </View>

      </View>
    </>
  );
}