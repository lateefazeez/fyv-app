import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import ohsBackground from 'assets/buttons/ohs.png';
import esBackground from 'assets/buttons/employmentstandards.png';
import hrBackground from 'assets/buttons/humanrights.png';

import colors from 'config/colors.json';

const Slide01 = index => {
  const navigation = useNavigation();

  return (
    <View key={index} style={styles.buttonContainer}>
      <View style={styles.buttonContent}>
        <ImageBackground
          source={ohsBackground}
          style={styles.background}
          imageStyle={{
            borderRadius: 16,
          }}
        >
          <Text numberOfLines={2} style={styles.text}>
            Occupational Health and Safety
          </Text>
        </ImageBackground>
      </View>
      <RectButton
        style={styles.ripple}
        onPress={() => {
          navigation.navigate('Know Your Rights Tabs', {
            screen: 'OHS',
          });
        }}
      />
    </View>
  );
};
const Slide02 = index => {
  const navigation = useNavigation();

  return (
    <View key={index} style={styles.buttonContainer}>
      <View style={styles.buttonContent}>
        <ImageBackground
          source={esBackground}
          style={styles.background}
          imageStyle={{
            borderRadius: 16,
          }}
        >
          <Text numberOfLines={2} style={styles.text}>
            Employment Standards
          </Text>
        </ImageBackground>
      </View>
      <RectButton
        style={styles.ripple}
        onPress={() => {
          navigation.navigate('Know Your Rights Tabs', {
            screen: 'Employment Standards',
          });
        }}
      />
    </View>
  );
};

const Slide03 = index => {
  const navigation = useNavigation();

  return (
    <View key={index} style={styles.buttonContainer}>
      <View style={styles.buttonContent}>
        <ImageBackground
          source={hrBackground}
          style={styles.background}
          imageStyle={{
            borderRadius: 16,
          }}
        >
          <Text numberOfLines={2} style={styles.text}>
            Human Rights
          </Text>
        </ImageBackground>
      </View>
      <RectButton
        style={styles.ripple}
        onPress={() => {
          navigation.navigate('Know Your Rights Tabs', {
            screen: 'Human Rights',
          });
        }}
      />
    </View>
  );
};

const slides = [Slide01, Slide02, Slide03];
export default slides;

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 24,
    marginBottom: 48,

    backgroundColor: colors.lightPrimary,
    borderRadius: 16,
    position: 'relative',

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  buttonContent: {},
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    resizeMode: 'contain',
  },
  text: {
    color: colors.white,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 24,
    width: '60%',
  },
  ripple: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
});
