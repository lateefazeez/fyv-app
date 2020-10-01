import React from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

import MainScreenButton from 'components/MainScreenButton';
import KnowYourRightsImage from 'assets/buttons/knowyourrights.png';
import ResourcesImage from 'assets/buttons/resources.png';
import FindYourVoiceImage from 'assets/buttons/findyourvoice.png';

import colors from 'config/colors.json';
import logo from 'assets/logos/white.png';

const Main = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.logoContainer}>
      <Image style={styles.mainPageLogo} source={logo} />
    </View>

    <View style={styles.navContainer}>
      <MainScreenButton
        buttonImage={KnowYourRightsImage}
        target="Know Your Rights"
      >
        Know Your
        {'\n'}
        Rights
      </MainScreenButton>

      <MainScreenButton
        buttonImage={FindYourVoiceImage}
        target="Find Your Voice"
      >
        Find Your
        {'\n'}
        Voice
      </MainScreenButton>

      <MainScreenButton buttonImage={ResourcesImage}>
        Resources
      </MainScreenButton>
    </View>
  </SafeAreaView>
);

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  logoContainer: {
    alignItems: 'center',
    backgroundColor: colors.titleBar,
    flex: 2,
    justifyContent: 'center',
  },
  mainPageLogo: {
    height: '50%',
    resizeMode: 'contain',
  },
  navContainer: {
    flex: 2.5,
    marginBottom: 8,
    marginTop: -32,
    paddingHorizontal: 24,
    justifyContent: 'space-around',
  },
});
