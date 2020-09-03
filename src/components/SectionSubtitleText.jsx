import React from 'react';
import { Text, Platform, StyleSheet } from 'react-native';

import colors from '../config/colors';

function SectionSubtitleText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.paragraph,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    marginBottom: 16,
  },
});

export default SectionSubtitleText;
