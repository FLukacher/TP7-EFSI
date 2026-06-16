// View.js es la cara — solo muestra lo que App.js le manda por props
// No tiene lógica propia, no sabe si el login es correcto o no

import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function FormularioLogin({ usuario, setUsuario, password, setPassword, mensaje, loginExitoso, handleLogin }) {
  return (
    <View style={styles.caja}>

      {/* Logo */}
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg',
        }}
        style={styles.imagen}
        resizeMode="contain"
      />

      {/* Título */}
      <Text style={styles.titulo}>Iniciar Sesión</Text>

      {/* Input usuario */}
      <Text style={styles.label}>Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresá tu usuario"
        value={usuario}
        onChangeText={setUsuario}
        autoCapitalize="none"
      />

      {/* Input contraseña */}
      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresá tu contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      {/* Botón — llama a handleLogin que vive en App.js */}
      <TouchableOpacity style={styles.boton} onPress={handleLogin}>
        <Text style={styles.botonTexto}>Ingresar</Text>
      </TouchableOpacity>

      {/* Mensaje — solo aparece si hay algo que mostrar */}
      {mensaje !== '' && (
        <View style={[styles.mensajeBox, loginExitoso ? styles.exito : styles.error]}>
          <Text style={styles.mensajeTexto}>{mensaje}</Text>
        </View>
      )}

    </View>
  );
}