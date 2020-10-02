import React from 'react';
import { AppRegistry, Platform, StyleSheet, Alert } from 'react-native';
import ParsedText from 'react-native-parsed-text';
import Glossary from 'config/glossary.json';

import colors from 'config/colors.json';

const Paragraph = ({ children, style }) => {
  const handleWordPress = word => {
    const cleanedWord = JSON.stringify(
      word.replace(/[^0-9a-z-A-Z ]/g, '').replace(/ +/, ' '),
    );
    Alert.alert(cleanedWord);
    const foundWord = Glossary.map(item => item.data);
    console.log(foundWord);
  };

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
          renderText: renderGlossary,
          onPress: handleWordPress,
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
