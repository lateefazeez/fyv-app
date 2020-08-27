import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../config/colors';
import ButtonText from './ButtonText';

const MainScreenButton = ({ children, imageLeft, imageRight, style }) => {
  const navigation = useNavigation();

  return (
    <RectButton
      style={styles.button}
      onPress={() => navigation.navigate(children)}
    >
      <View style={styles.buttonContent} accessible>
        <Image source={imageLeft} style={styles.imageLeft} />
        <ButtonText>{children}</ButtonText>
        <Image source={imageRight} style={[styles.imageRight, style]} />
      </View>
    </RectButton>
  );
};

export default MainScreenButton;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: colors.primary,
    marginTop: 8,
  },
  buttonContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 5,
  },
  imageLeft: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    margin: 10,
  },
  imageRight: {
    marginLeft: 15,
    width: 80,
    height: 120,
    resizeMode: 'contain',
  },
});
