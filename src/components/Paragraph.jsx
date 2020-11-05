import React, { useState, useEffect } from 'react';
import {
  Alert,
  Text,
  View,
  Platform,
  StyleSheet,
  Modal,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import ParsedText from 'react-native-parsed-text';
import Constants from 'expo-constants';

// import Glossary from 'config/glossary.json';
import colors from 'config/colors.json';
import getData from 'utils/getData';

const Paragraph = ({ children, style }) => {
  const [data, setData] = useState([]);
  const [currentWord, setCurrentWord] = useState();
  const [foundWord, setFoundWord] = useState();
  const windowWidth = useWindowDimensions().width;

  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    getData('GLOSSARY').then(response => {
      if (response) {
        setData(response);
      } else {
        Alert.alert(
          'Data not found',
          'Something went wrong. Please try again.',
        );
      }
    });
  }, []);

  const parseGlossaryWord = (matchingString, matches) => {
    matches = [];
    const pattern = /\[(.*?)\]/i;
    const match = matchingString.match(pattern);

    setCurrentWord(match[1].replace(/[[\]']+/g, ''));
    return currentWord;
  };

  const displayTooltip = () => {
    let foundOnGlossaryWord;

    data.forEach(item => {
      if (item.word.toUpperCase() === currentWord.toUpperCase()) {
        foundOnGlossaryWord = item;
      }
    });

    if (!foundOnGlossaryWord) {
      Alert.alert('This word was not found in the glossary.');
      return;
    }
    setFoundWord(foundOnGlossaryWord);
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setFoundWord();
    setCurrentWord();
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
            <View
              style={{
                position: 'absolute',
                width: '100%',
                top: tooltipPosition.y,
              }}
            >
              <TouchableOpacity
                style={
                  tooltipPosition.x < windowWidth / 2
                    ? styles.tooltipLeft
                    : styles.tooltipRight
                }
                onPress={hideTooltip}
              >
                {foundWord && (
                  <Text style={styles.tooltipText}>
                    {foundWord.description}
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
      <View
        onTouchStart={event => {
          setTooltipPosition({
            x: event.nativeEvent.pageX,
            y: event.nativeEvent.pageY - Constants.statusBarHeight + 16,
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
              renderText: parseGlossaryWord,
            },
          ]}
        >
          {children}
        </ParsedText>
      </View>
    </>
  );
};

export default Paragraph;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tooltipContainer: {
    flex: 1,
  },
  tooltipLeft: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 16,
    marginLeft: 24,
    width: '50%',
    alignSelf: 'flex-start',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  tooltipRight: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 16,
    marginRight: 24,
    width: '50%',
    alignSelf: 'flex-end',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
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
    lineHeight: 20,
    fontSize: 14,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});
