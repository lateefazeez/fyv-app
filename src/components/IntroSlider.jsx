import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';

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
        showSkipButton
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
    <View style={styles.doneButton}>
      <Icon name="md-checkmark" color={colors.black} size={24} />
    </View>
  );
};

const nextButton = () => {
  return (
    <View style={styles.nextButton}>
      <Icon
        name="md-arrow-round-forward"
        color="rgba(255, 255, 255, .9)"
        size={24}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  doneButton: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, .8)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  nextButton: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    flexDirection: 'row',
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
    padding: 24,
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
    lineHeight: 18,
    fontSize: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 32,
    color: colors.white,
    textAlign: 'center',
  },
});
