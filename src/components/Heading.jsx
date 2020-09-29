import React from 'react';
import { Text, Platform, StyleSheet } from 'react-native';

import colors from 'config/colors.json';

function Heading({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: colors.black,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    marginVertical: 24,
  },
});

export default Heading;
