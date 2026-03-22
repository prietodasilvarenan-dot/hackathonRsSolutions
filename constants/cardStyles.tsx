import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Sombra para Android
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  btnBase: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    minWidth: 70,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#888',
  },
  // Estados Ativos
  btnQueroActive: {
    backgroundColor: '#E8F5E9',
    borderColor: '#4CAF50',
  },
  textQueroActive: {
    color: '#2E7D32',
  },
  btnEvitoActive: {
    backgroundColor: '#FFEBEE',
    borderColor: '#EF5350',
  },
  textEvitoActive: {
    color: '#C62828',
  },
});