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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
    borderColor: '#414141',
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
    borderColor: '#327934',
  },
  textQueroActive: {
    color: '#236426',
  },
  btnEvitoActive: {
    backgroundColor: '#FFEBEE',
    borderColor: '#9c1e1c',
  },
  textEvitoActive: {
    color: '#C62828',
  },
});