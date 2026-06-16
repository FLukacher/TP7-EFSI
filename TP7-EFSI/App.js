import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';

const USUARIO_VALIDO = 'admin';
const PASSWORD_VALIDA = '1234';

export default function App() {

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [loginExitoso, setLoginExitoso] = useState(false);

  const handleLogin = () => {
    if (usuario === USUARIO_VALIDO && password === PASSWORD_VALIDA) {
      setLoginExitoso(true);
      setMensaje('¡Inicio de sesión exitoso! Bienvenido.');
    } else {
      setLoginExitoso(false);
      setMensaje('Usuario o contraseña incorrectos, vuelva a intentar.');
    }
  };

  return (
    <SafeAreaView style={styles.marco}>
      {/* acá van los demás componentes */}
    </SafeAreaView>
  );
}