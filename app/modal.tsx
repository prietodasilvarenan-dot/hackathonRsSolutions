import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ModalScreen() {
  return (
    <View style={styles.overlay}>
      
      <View style={styles.modal}>
        
        <Text style={styles.titulo}>Pedido pronto!</Text>
        <Text style={styles.subtitulo}>
          Seu pedido foi processado com sucesso.
        </Text>

        <Link href="/" asChild>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Voltar ao início</Text>
          </TouchableOpacity>
        </Link>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)', // fundo escuro transparente
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    width: '85%',
    backgroundColor: '#1e293b',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',

    // sombra Android
    elevation: 10,

    // sombra iOS
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 14,
    color: '#cbd5f5',
    marginBottom: 20,
    textAlign: 'center',
  },

  botao: {
    backgroundColor: '#22c55e',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },

  textoBotao: {
    color: '#fff',
    fontWeight: '600',
  },
});