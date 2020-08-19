import React from 'react';
import { View } from 'react-native';

import MainScreenButton from '../components/MainScreenButton';

const Main = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    }}
  >
    <MainScreenButton>Workplace Safety</MainScreenButton>
    <MainScreenButton>Resources</MainScreenButton>
    <MainScreenButton>Finding Your Voice</MainScreenButton>
    <MainScreenButton>Disclaimers</MainScreenButton>
  </View>
);

export default Main;
