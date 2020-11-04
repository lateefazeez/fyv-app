import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import AppIntroSlider from 'react-native-app-intro-slider';
import Constants from 'expo-constants';

import nextButtonImg from 'assets/intro/nextButton.png';
import doneButtonImg from 'assets/intro/doneButton.png';

import colors from 'config/colors.json';
import getSlides from './introSlides';

const doneButton = () => {
  return (
    <TouchableRipple style={styles.doneButton}>
      <Image source={doneButtonImg} />
    </TouchableRipple>
  );
};

const nextButton = () => {
  return (
    <TouchableRipple style={styles.nextButton}>
      <Image source={nextButtonImg} />
    </TouchableRipple>
  );
};

const IntroSlider = ({ onDone, ...props }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getSlides().then(response => console.log(response));
  }, []);

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
        data={data}
        onDone={onDone}
        activeDotStyle={{ backgroundColor: 'rgba(0, 0, 0, .8)' }}
        {...props}
      />
    </>
  );
};

export default IntroSlider;

const styles = StyleSheet.create({
  doneButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -16,
    marginTop: -32,
  },
  nextButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -16,
    marginTop: -32,
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
    backgroundColor: colors.darkgrey,
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
