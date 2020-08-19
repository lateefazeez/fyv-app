import React from 'react';
import { View, Image } from 'react-native';

import MainScreenButton from '../components/MainScreenButton';
import logo from '../../assets/logo_green.png';

const Main = () => (
  <View
    style={{
      flex: 1,
    }}
  >
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
      }}
    >
      <Image
        source={logo}
        style={{ flex: 1 }}
        width="null"
        height="null"
        resizeMode="contain"
      />
    </View>
    <View
      style={{
        flex: 2,
        padding: 4,
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
