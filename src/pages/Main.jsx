import React from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';

import MainScreenButton from '../components/MainScreenButton';

const Main = () => (
  <SafeAreaView style={styles.pageContainer}>
    <View style={styles.logoContainer}>
      <Image style={styles.mainPageLogo} source={logo} />
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
      <MainScreenButton
        style={{ marginLeft: 30 }}
        imageLeft={require('../../assets/workplace_safety.png')}
        imageRight={require('../../assets/group_326.png')}
      >
        Workplace Safety
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
      <MainScreenButton
        style={{
          marginLeft: 130,
          width: 30,
          height: 30,
          alignSelf: 'flex-end',
          marginBottom: 10,
        }}
        imageLeft={require('../../assets/disclaimer.png')}
        imageRight={require('../../assets/rock.png')}
      >
        Disclaimers
      </MainScreenButton>
    </View>
  </SafeAreaView>
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
