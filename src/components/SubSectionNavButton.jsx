import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../config/colors';
import ButtonText from './ButtonText';

function SubSectionNavButton({ children, style, title }) {
  const navigation = useNavigation();

  return (
    <RectButton
      title={title}
      style={[styles.button, style]}
      onPress={() => navigation.navigate(children)}
    >
      <View accessible>
        <ButtonText style={styles.ButtonText}>{children}</ButtonText>
      </View>
    </RectButton>
  );
}

export default SubSectionNavButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  ButtonText: {
    color: colors.primary,
    fontSize: 16,
    textAlign: 'center',
  },
});
