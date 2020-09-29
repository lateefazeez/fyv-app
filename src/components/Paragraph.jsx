import React from 'react';
import { Text, Platform, StyleSheet } from 'react-native';

import colors from 'config/colors.json';

function Paragraph({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.darkerGrey,
    lineHeight: 24,
    fontSize: 16,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    marginBottom: 24,
    textAlign: 'justify',
  },
});

export default Paragraph;
