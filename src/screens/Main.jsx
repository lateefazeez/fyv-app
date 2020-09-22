import React from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

import MainScreenButton from 'components/MainScreenButton';
import KnowYourRightsImage from 'assets/workplace_safety.png';
import ResourcesImage from 'assets/resources.png';
import FindingYourVoiceImage from 'assets/finding_your_voice.png';

import colors from 'config/colors.json';
import logo from 'assets/logo_green.png';

const Main = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.logoContainer}>
      <Image style={styles.mainPageLogo} source={logo} />
    </View>

    <View style={styles.navContainer}>
      <MainScreenButton imageLeft={KnowYourRightsImage}>
        Know Your Rights
      </MainScreenButton>

      <MainScreenButton imageLeft={FindingYourVoiceImage}>
        Find Your Voice
      </MainScreenButton>
      <MainScreenButton imageLeft={ResourcesImage}>Resources</MainScreenButton>
    </View>
  </SafeAreaView>
);

export default Main;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '25%',
  },
  mainPageLogo: {
    flex: 1,
    resizeMode: 'contain',
  },
  navContainer: {
    flex: 1.5,
    paddingHorizontal: 16,
    paddingBottom: 16,
    alignItems: 'stretch',
    justifyContent: 'flex-end',
  },
});
