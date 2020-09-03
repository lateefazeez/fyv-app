import React, { useState } from 'react';
import { StatusBar, View, Text, Image, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import DrawerNavigation from './src/navigation/DrawerNavigation';
import colors from './src/config/colors';
import slides from './src/config/onboardingSlides';

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
});
