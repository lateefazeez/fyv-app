import React from 'react';
import { Text, Platform, StyleSheet } from 'react-native';

import colors from '../config/colors';

function ButtonText({ children, style }) {
  return (
    <Text accessible style={[styles.text, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});

export default ButtonText;
