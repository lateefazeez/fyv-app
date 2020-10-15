import React, { useState } from 'react';
import { AppRegistry, Platform, StyleSheet, Alert } from 'react-native';
import ParsedText from 'react-native-parsed-text';
import Glossary from 'config/glossary.json';

import colors from 'config/colors.json';

const Paragraph = ({ children, style }) => {
  const [currentWord, setCurrentWord] = useState('');
  const [foundWord, setFoundWord] = useState('');

  const handleWordPress = () => {
    Glossary.map(item => {
      item.data.map(subitem => {
        if (subitem.word.toUpperCase() === currentWord.toUpperCase()) {
          setFoundWord(subitem);
        }
      });
    });
    console.log('current: ', currentWord);
    console.log('found: ', foundWord);
  };

  const renderGlossary = (matchingString, matches) => {
    const pattern = /\[(.*?)\]/i;
    const match = matchingString.match(pattern);
    setCurrentWord(`${match[1]}`);
    return currentWord;
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
