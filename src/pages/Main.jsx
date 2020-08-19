import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MainScreenButton from "../components/MainScreenButton"

const Main = () => {

  const navigation = useNavigation();

  return (
    <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 } }>
      <MainScreenButton>Workplace Safety</MainScreenButton>
      <MainScreenButton>Resources</MainScreenButton>
      <MainScreenButton>Finding Your Voice</MainScreenButton>
      <MainScreenButton>Disclaimers</MainScreenButton>
    </View>
  );
};

export default Main;
