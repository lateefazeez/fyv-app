import React, { useState } from 'react';
import {
  Text,
  View,
  Platform,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';
import ParsedText from 'react-native-parsed-text';

import Glossary from 'config/glossary.json';
import colors from 'config/colors.json';

const Paragraph = ({ children, style }) => {
  const [foundWord, setFoundWord] = useState();

  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const renderGlossary = matchingString => {
    const pattern = /\[(.*?)\]/i;
    const match = matchingString.match(pattern);
    return `${match[1]}`;
  };

  const displayTooltip = event => {
    const currentWord = event.replace(/[[\]']+/g, '');
    console.log('currentWord: ', currentWord);

    Glossary.forEach(item => {
      if (item.word.toUpperCase() === currentWord.toUpperCase()) {
        console.log('foundWord: ', item);
        setFoundWord(() => item);
      }
    });

    if (foundWord) setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setFoundWord();
    setTooltipVisible(false);
  };

  return (
    <>
      <View style={styles.centeredView}>
        <Modal
          transparent
          animationType="fade"
          visible={tooltipVisible}
          onRequestClose={hideTooltip}
        >
          <TouchableOpacity
            style={styles.tooltipContainer}
            onPress={hideTooltip}
          >
            <TouchableOpacity
              style={[
                styles.tooltip,
                {
                  position: 'absolute',
                  left: tooltipPosition.x,
                  top: tooltipPosition.y - 72,
                },
              ]}
              onPress={hideTooltip}
            >
              {foundWord && (
                <>
                  <Text style={styles.tooltipText}>
                    {`Word: ${foundWord.word}`}
                  </Text>
                  <Text style={styles.tooltipText}>
                    {`Phonetics: ${foundWord.phonetics}`}
                  </Text>
                  <Text style={styles.tooltipText}>
                    {`Category: ${foundWord.category}`}
                  </Text>
                  <Text style={styles.tooltipText}>
                    {`Description: ${foundWord.description}`}
                  </Text>
                </>
              )}
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>
      </View>
      <View
        onTouchStart={event => {
          setTooltipPosition({
            x: event.nativeEvent.pageX,
            y: event.nativeEvent.pageY + 56,
          });
        }}
      >
        <ParsedText
          style={[styles.text, style]}
          parse={[
            {
              pattern: /\[(.*?)\]/i,
              style: styles.glossaryText,
              onPress: displayTooltip,
              renderText: renderGlossary,
            },
          ]}
        >
          {children}
        </ParsedText>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tooltipContainer: {
    flex: 1,
    backgroundColor: colors.transpWhite,
    position: 'relative',
  },
  tooltip: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 16,
    maxWidth: 240,
  },
  text: {
    color: colors.darkerGrey,
    lineHeight: 24,
    fontSize: 16,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    marginBottom: 24,
    textAlign: 'justify',
  },
  glossaryText: {
    fontWeight: 'bold',
    color: colors.primary,
  },
  tooltipText: {
    color: colors.white,
    lineHeight: 24,
    fontSize: 16,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});

export default Paragraph;
