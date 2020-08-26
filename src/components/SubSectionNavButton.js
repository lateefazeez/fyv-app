import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../config/colors';
import ButtonText from '../components/ButtonText';

function SubSectionNavButton({ children, style }) {
  const navigation = useNavigation();

  return (
    <View
      style={[styles.button, style]}
      onPress={() => navigation.navigate(children)}
    >
      <ButtonText style={styles.ButtonText}>{children}</ButtonText>
    </View>
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
