import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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


  //MODAL
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)', // fundo escuro transparente
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    width: '85%',
    backgroundColor: '#e0e0e0',
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
});