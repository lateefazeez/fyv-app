import React from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';

import MainScreenButton from '../components/MainScreenButton';

import logo from '../../assets/logo_green.png';

const Main = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.logoContainer}>
      <Image style={styles.mainPageLogo} source={logo} />
    </View>
    <View style={styles.navContainer}>
      <MainScreenButton
        style={{ marginLeft: 30 }}
        imageLeft={require('../../assets/workplace_safety.png')}
        imageRight={require('../../assets/group_326.png')}
      >
        Know Your Rights
      </MainScreenButton>
      <MainScreenButton
        style={{ marginLeft: 90 }}
        imageLeft={require('../../assets/resources.png')}
        imageRight={require('../../assets/group_329.png')}
      >
        Resources
      </MainScreenButton>
      <MainScreenButton
        style={{
          marginLeft: 70,
          width: 30,
          height: 30,
          alignSelf: 'flex-end',
          marginBottom: 10,
        }}
        imageLeft={require('../../assets/finding_your_voice.png')}
        imageRight={require('../../assets/rock.png')}
      >
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
    paddingBottom: 8,
    alignItems: 'stretch',
    justifyContent: 'flex-end',
  },
});
