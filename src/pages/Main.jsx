import React from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';

import MainScreenButton from '../components/MainScreenButton';
import KnowYourRightsImage from '../../assets/workplace_safety.png';
import ResourcesImage from '../../assets/resources.png';
import FindingYourVoiceImage from '../../assets/finding_your_voice.png';

import logo from '../../assets/logo_green.png';

const Main = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.logoContainer}>
      <Image style={styles.mainPageLogo} source={logo} />
    </View>

    <View style={styles.navContainer}>
      <MainScreenButton imageLeft={KnowYourRightsImage}>
        Know Your Rights
      </MainScreenButton>

      <MainScreenButton imageLeft={ResourcesImage}>Resources</MainScreenButton>

      <MainScreenButton imageLeft={FindingYourVoiceImage}>
        Finding Your Voice
      </MainScreenButton>
    </View>
  </SafeAreaView>
);

export default Main;

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 48,
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
