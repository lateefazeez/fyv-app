import React from 'react';
import { Text, Platform, StyleSheet } from 'react-native';

import colors from 'config/colors.json';

function Subheading({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontSize: Platform.OS === 'android' ? 16 : 17,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    marginBottom: 16,
  },
});

export default Subheading;
