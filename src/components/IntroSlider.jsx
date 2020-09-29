import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';
import Constants from 'expo-constants';

import colors from 'config/colors.json';
import slides from 'config/introSlides';

const doneButton = () => {
  return (
    <View style={styles.doneButton}>
      <Icon name="md-checkmark" color={colors.white} size={24} />
    </View>
  );
};

const nextButton = () => {
  return (
    <View style={styles.nextButton}>
      <Icon name="md-arrow-round-forward" color={colors.white} size={24} />
    </View>
  );
};

const App = ({ onDone, ...props }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        {item.image && (
          <View style={styles.slideUpperSection}>
            <Image source={item.image} />
          </View>
        )}
        <View
          style={
            item.image ? styles.slideLowerSection : styles.slideSingleSection
          }
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <StatusBar style="dark" translucent />
      <AppIntroSlider
        renderItem={renderItem}
        renderDoneButton={doneButton}
        renderNextButton={nextButton}
        data={slides}
        onDone={onDone}
        activeDotStyle={{ backgroundColor: 'rgba(0, 0, 0, .8)' }}
        {...props}
      />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  doneButton: {
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  nextButton: {
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    flexDirection: 'row',
  },
  slide: {
    flex: 1,
    flexDirection: 'column',
    marginTop: Constants.statusBarHeight,
  },
  slideUpperSection: {
    flex: 1,
    flexShrink: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideLowerSection: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  slideSingleSection: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
  },
  text: {
    color: colors.darkerGrey,
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 24,
    textAlign: 'justify',
  },
  title: {
    color: colors.black,
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 24,
    textAlign: 'center',
  },
});
