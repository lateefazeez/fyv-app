import React, { useState } from 'react';
import { Alert, Platform, StyleSheet } from 'react-native';
import { Tooltip, Text } from 'react-native-elements';

import ParsedText from 'react-native-parsed-text';
import Glossary from 'config/glossary.json';

import colors from 'config/colors.json';

const Paragraph = ({ children, style }) => {
  const [currentWord, setCurrentWord] = useState('');
  const [foundWord, setFoundWord] = useState('');

  const handleWordPress = () => {
    // Glossary.map(item => {
    //   item.data.map(subitem => {
    //     if (subitem.word.toUpperCase() === currentWord.toUpperCase()) {
    //       setFoundWord(subitem);
    //     }
    //   });
    // });
    // console.log('current: ', currentWord);
    // console.log('found: ', foundWord);
    Glossary.map(item => {
      if (item.word.toUpperCase() === currentWord.toUpperCase()) {
        setFoundWord(item.description);
        console.log('Current: ', currentWord);
        console.log('Found: ', foundWord);
        Alert.alert(foundWord);
        // return (
        //   <Tooltip popover={<Text>Info Here</Text>}>{currentWord}</Tooltip>
        // );
      }
    });
  };

  const renderGlossary = (matchingString, matches) => {
    const pattern = /\[(.*?)\]/i;
    const match = matchingString.match(pattern);
    setCurrentWord(`${match[1]}`);
    return currentWord;
  };

  return (
    //<Tooltip popover={<Text>{foundWord}</Text>}>
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
    //</Tooltip>
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
