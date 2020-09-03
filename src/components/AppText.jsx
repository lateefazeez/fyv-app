import React from 'react';
import { Text, Platform, StyleSheet } from 'react-native';

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default AppText;
