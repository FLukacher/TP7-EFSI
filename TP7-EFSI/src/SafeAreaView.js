import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from '../styles';

export default function Marco({ children }) {
  return (
    <SafeAreaView style={styles.marco}>
      {children}
    </SafeAreaView>
  );
}