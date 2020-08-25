import React from 'react';
import { View, Image, StyleSheet, Platform } from 'react-native';

import MainScreenButton from '../components/MainScreenButton';
import logo from '../../assets/logo_green.png';

const Main = () => (
  <View style={styles.pageContainer}>
    <View style={styles.logoContainer}>
      <Image
        style={styles.mainPageLogo}
        source={require('../../assets/logo_green.png')}
      />
    </View>
    <View
      style={{
        flex: 2,
        paddingHorizontal: 8,
        paddingBottom: 8,
        alignItems: 'stretch',
        justifyContent: 'flex-end',
      }}
    >
      <MainScreenButton>Workplace Safety</MainScreenButton>
      <MainScreenButton>Resources</MainScreenButton>
      <MainScreenButton>Finding Your Voice</MainScreenButton>
      <MainScreenButton>Disclaimers</MainScreenButton>
    </View>
  </View>
);

export default Main;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 64,
  },
  mainPageLogo: {
    flex: 1,
    resizeMode: 'contain',
  },
});
