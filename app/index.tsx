import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  return (


    <View style={styles.container}>
      
      <Text style={styles.titulo}>Seja bem vindo ao nosso Estabelecimento!</Text>
      <Text style={styles.subtitulo}>
        Deseja consumir em viagem ou no local?
      </Text>

      <View style={styles.horizontal}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => router.push('/consulta?tipo=viagem')}
        >
          <Text style={styles.textoBotao}>Viagem</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoSecundario}
          onPress={() => router.push('/consulta?tipo=local')}
        >
          <Text style={styles.textoBotao}>Local</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c5c5c5', // fundo
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  horizontal: {
    flexDirection: 'row',
    gap: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#242424',
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 16,
    color: '#424242',
    marginBottom: 30,
  },

  botao: {
    flex: 1,
    backgroundColor: '#334155',
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 12,
    alignItems: 'center',
  },

  botaoSecundario: {
    flex: 1,
    backgroundColor: '#334155',
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 12,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});