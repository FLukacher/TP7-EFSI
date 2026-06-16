// App.js es el cerebro — guarda el estado y la lógica, no muestra nada visual propio
// Todo lo visual se lo delega a View.js a través de props

import React, { useState } from 'react';
import { SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import FormularioLogin from './src/View';
import styles from './styles';

const USUARIO_VALIDO = 'admin';
const PASSWORD_VALIDA = '1234';

export default function App() {

  // Memoria de la app: guarda lo que el usuario escribe y el resultado del login
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [loginExitoso, setLoginExitoso] = useState(false);

  // Única función de la app: compara credenciales y actualiza el mensaje
  const handleLogin = () => {
    if (usuario === USUARIO_VALIDO && password === PASSWORD_VALIDA) {
      setLoginExitoso(true);
      setMensaje('¡Inicio de sesión exitoso! Bienvenido.');
    } else {
      setLoginExitoso(false);
      setMensaje('Usuario o contraseña incorrectos, vuelva a intentar.');
    }
  };

  // La vista de App.js es solo el envoltorio — protege bordes y maneja el teclado
  // Todo lo demás se lo pasa a FormularioLogin como props(parametros), para que funicone de forma personalizada
  return (
    <SafeAreaView style={styles.marco}>
      <KeyboardAvoidingView
        style={styles.adaptador}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <FormularioLogin
          usuario={usuario}
          setUsuario={setUsuario}
          password={password}
          setPassword={setPassword}
          mensaje={mensaje}
          loginExitoso={loginExitoso}
          handleLogin={handleLogin}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}