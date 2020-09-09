import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppIntroSlider from 'react-native-app-intro-slider';

import colors from '../config/colors';
import slides from '../config/onboardingSlides';

const App = ({ onDone, ...props }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      <StatusBar style="light" backgroundColor={colors.statusBar} />
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        onDone={onDone}
        {...props}
      />
    </>
  );
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
    color: colors.white,
    textAlign: 'center',
  },
});
