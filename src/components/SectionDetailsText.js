import React from 'react';
import { Text, Platform, StyleSheet } from 'react-native';

import colors from '../config/colors';

function SectionDetailsText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontSize: Platform.OS === 'android' ? 16 : 13.5,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});

export default SectionDetailsText;
