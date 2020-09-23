import React from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

import MainScreenButton from 'components/MainScreenButton';
import KnowYourRightsImage from 'assets/kny_image_3x.png';
import ResourcesImage from 'assets/res_image_3x.png';
import FindingYourVoiceImage from 'assets/fyv_image_3x.png';

import colors from 'config/colors.json';
import logo from 'assets/logo_white.png';

const Main = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.logoContainer}>
      <Image style={styles.mainPageLogo} source={logo} />
    </View>

    <View style={styles.navContainer}>
      <MainScreenButton
        buttonImage={KnowYourRightsImage}
        style={{ justifyContent: 'center' }}
      >
        Know Your Rights
      </MainScreenButton>

      <MainScreenButton buttonImage={FindingYourVoiceImage}>
        Find Your Voice
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
    justifyContent: 'center',
    padding: 80,
    position: 'relative',
  },

  mainPageLogo: { height: 150, resizeMode: 'contain' },
  navContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    position: 'absolute',
    top: 250,
    width: '100%',
  },
});
