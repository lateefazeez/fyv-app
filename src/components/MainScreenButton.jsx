import React from 'react';
import { View, StyleSheet, Image, Text, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from 'config/colors.json';

const MainScreenButton = ({ children, imageLeft, imageRight, style }) => {
  const navigation = useNavigation();

  return (
    <RectButton
      style={styles.buttonContainer}
      onPress={() => navigation.navigate(children)}
    >
      <View style={styles.buttonContent}>
        <Image source={imageLeft} style={styles.imageLeft} />
        <Text style={styles.text}>{children}</Text>
        <Image source={imageRight} style={[styles.imageRight, style]} />
      </View>
    </RectButton>
  );
};

export default MainScreenButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    marginTop: 8,
    borderRadius: 10,
    padding: 0,
  },
  buttonContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },
  imageLeft: {
    width: 72,
    height: 72,
    marginRight: 24,
    resizeMode: 'contain',
  },
  imageRight: {
    width: 72,
    height: 72,
    resizeMode: 'contain',
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});
