import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#ececec',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },

  container: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    gap: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#050505',
    marginBottom: 10,
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 16,
    color: '#6a6a6b',
    marginBottom: 30,
    textAlign: 'center',
  },

  botao: {
    flex: 0.9,
    backgroundColor: '#d85600',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    alignItems: 'center',
  },

  botaoSecundario: {
    flex: 0.9,                 
    flexDirection: 'row',      
    alignItems: 'center',      
    justifyContent: 'center', 
    backgroundColor: '#c23700',
    padding: 30,       
    borderRadius: 20, 
    height: 150,        
    elevation: 5,             
    shadowColor: '#000',      
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },

  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    width: '85%',
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  navbar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    gap: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },

  titleCard: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
});