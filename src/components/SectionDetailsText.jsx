/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, Platform, StyleSheet } from 'react-native';

import colors from '../config/colors';

function SectionDetailsText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.paragraph,
    fontSize: Platform.OS === 'android' ? 16 : 14,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    marginBottom: 24,
    textAlign: 'justify',
  },
});

export default SectionDetailsText;
