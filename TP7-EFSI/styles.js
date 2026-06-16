import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Login App (Apellido, Apellido)
        </Text>
      </View>

      {/* Logo */}
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg',
        }}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Inputs */}
      <TextInput
        style={styles.input}
        placeholder="simon@galaxies.dev"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="********"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>INGRESAR</Text>
      </TouchableOpacity>

      {/* Links */}
      <TouchableOpacity>
        <Text style={styles.link}>¿Olvidaste la clave?</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.link}>Crear Cuenta</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
    alignItems: 'center',
  },

  header: {
    width: '100%',
    backgroundColor: '#5A00FF',
    paddingVertical: 15,
    alignItems: 'center',
  },

  headerTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  logo: {
    width: 180,
    height: 120,
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: '#FFF',
  },

  input: {
    width: '80%',
    height: 45,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#8B5CF6',
    borderRadius: 3,
    marginBottom: 12,
    paddingHorizontal: 10,
  },

  button: {
    width: '80%',
    height: 45,
    backgroundColor: '#8B5CF6',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  link: {
    color: '#000',
    fontSize: 14,
    marginVertical: 5,
  },
});