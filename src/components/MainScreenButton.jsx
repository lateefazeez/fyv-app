import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../config/colors';
import ButtonText from './ButtonText';

const MainScreenButton = ({ children }) => {
  const navigation = useNavigation();

  return (
    <RectButton
      style={styles.button}
      onPress={() => navigation.navigate(children)}
    >
      <ButtonText>{children}</ButtonText>
    </RectButton>
  );
};

export default MainScreenButton;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 8,
    paddingLeft: 128,
    paddingRight: 16,
  },
});
