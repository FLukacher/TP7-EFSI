import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  marco: {
    flex: 1,
    backgroundColor: '#ECECEC',
  },

  adaptador: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  caja: {
    width: '85%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  imagen: {
    width: 180,
    height: 120,
    marginBottom: 20,
    backgroundColor: '#FFF',
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },

  label: {
    alignSelf: 'flex-start',
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
    marginTop: 8,
  },

  input: {
    width: '100%',
    height: 45,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#8B5CF6',
    borderRadius: 3,
    marginBottom: 4,
    paddingHorizontal: 10,
  },

  boton: {
    width: '100%',
    height: 45,
    backgroundColor: '#8B5CF6',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 3,
  },

  botonTexto: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  mensajeBox: {
    width: '100%',
    padding: 12,
    borderRadius: 4,
    marginTop: 16,
  },

  exito: {
    backgroundColor: '#D4EDDA',
    borderColor: '#28A745',
    borderWidth: 1,
  },

  error: {
    backgroundColor: '#F8D7DA',
    borderColor: '#DC3545',
    borderWidth: 1,
  },

  mensajeTexto: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
});

export default styles;
