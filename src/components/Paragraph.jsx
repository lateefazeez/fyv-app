import React from 'react';
import { Text, Platform, StyleSheet } from 'react-native';
import ParsedText from 'react-native-parsed-text';
import { testAlert } from 'utils';

import colors from 'config/colors.json';

const Paragraph = ({ children, style }) => {
  const renderGlossary = (matchingString, matches) => {
    const pattern = /\[(.*?)\]/i;
    const match = matchingString.match(pattern);
    return `${match[1]}`;
  };
  return (
    <ParsedText
      style={[styles.text, style]}
      parse={[
        {
          pattern: /\[(.*?)\]/i,
          style: { fontWeight: 'bold', color: colors.primary },
          onPress: testAlert,
          renderText: renderGlossary,
        },
      ]}
    >
      {children}
    </ParsedText>
  );
};

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
