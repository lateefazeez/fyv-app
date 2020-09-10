import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/AntDesign';

import colors from '../config/colors';
import slides from '../config/onboardingSlides';

const App = ({ onDone, ...props }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <View style={styles.slideUpperSection}>
          <Image source={item.image} />
        </View>
        <View style={styles.slideLowerSection}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <StatusBar style="light" translucent />
      <AppIntroSlider
        renderItem={renderItem}
        renderDoneButton={doneButton}
        renderNextButton={nextButton}
        data={slides}
        onDone={onDone}
        {...props}
      />
    </>
  );
};

export default App;

const doneButton = () => {
  return (
    <Icon
      name="checkcircle"
      size={32}
      style={{ paddingRight: 16, paddingTop: 8 }}
      color={colors.white}
    />
  );
};

const nextButton = () => {
  return (
    <Icon
      name="arrowright"
      size={32}
      style={{ paddingRight: 16, paddingTop: 8 }}
      color={colors.white}
    />
  );
};

const styles = StyleSheet.create({
  doneButton: {
    borderColor: colors.white,
    borderStyle: 'solid',
    borderRadius: 5,
  },
  doneButtonText: {
    color: colors.white,
  },
  slide: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  slideUpperSection: {
    flex: 1,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  slideLowerSection: {
    flex: 1,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    height: '50%',
    resizeMode: 'contain',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'justify',
    width: '100%',
    lineHeight: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 32,
    color: colors.white,
    textAlign: 'center',
  },
});
