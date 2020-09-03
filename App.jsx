/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StatusBar, View, Text, Image, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import DrawerNavigation from './src/navigation/DrawerNavigation';
import placeholder from './assets/placeholder.png';
import colors from './src/config/colors';

const slides = [
  {
    key: 'one',
    title: 'Welcome',
    text:
      'Find your voice and know your rights with easy access to information and resources about your safety and labour rights in the workplace.',
    image: placeholder,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Learn Faster and Easier',
    text:
      'Trouble understanding difficult terms?\nSimply tap a word for its definition or look it up inside our glossary.',
    image: placeholder,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'three',
    title: 'Interactive Learning',
    text:
      'Be guided through different workplace scenarios to learn your options when faced with a problem, and be able to take an informed decision.',
    image: placeholder,
    backgroundColor: '#febe29',
  },
  {
    key: 'four',
    title: 'Disclaimer',
    text:
      'The purpose of this app is solely to educate workers about workplace health and safety regulations, general advice, guidance on your rights, and the services available to you.\nNone of the information provided is intended to be used in a legal way.',
    image: placeholder,
    backgroundColor: '#22bcb5',
  },
];

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  const onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setShowIntro(false);
  };

  if (showIntro) {
    return (
      <>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider renderItem={renderItem} data={slides} onDone={onDone} />
      </>
    );
  }
  return <DrawerNavigation />;
};

export default App;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    padding: 24,
  },
  image: {
    width: 320,
    height: 320,
    resizeMode: 'contain',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 32,
    color: 'white',
    textAlign: 'center',
  },
// eslint-disable-next-line prettier/prettier
});
