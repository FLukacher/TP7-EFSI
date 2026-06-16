import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import styles from '../styles';

export default function Teclado({ children }) {
  return (
    <KeyboardAvoidingView
      style={styles.adaptador}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {children}
    </KeyboardAvoidingView>
  );
}