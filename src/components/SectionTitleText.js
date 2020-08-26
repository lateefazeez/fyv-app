import React from 'react';
import { Text, Platform, StyleSheet } from 'react-native';

import colors from '../config/colors';

function SectionTitleText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});

export default SectionTitleText;
