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
    fontSize: Platform.OS === 'android' ? 21 : 22.5,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    marginBottom: 21,
  },
});

export default Heading;
