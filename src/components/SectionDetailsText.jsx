import React from 'react';
import { Text, Platform, StyleSheet } from 'react-native';

import colors from '../config/colors';

function SectionDetailsText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    lineHeight: Platform.OS === 'android' ? 21 : 22.5,
    fontSize: Platform.OS === 'android' ? 14 : 15,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    marginBottom: 21,
    textAlign: 'justify',
  },
});

export default SectionDetailsText;
