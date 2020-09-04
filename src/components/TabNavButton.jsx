/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../config/colors';
import ButtonText from './ButtonText';

function SubSectionNavButton({ title }) {
  const navigation = useNavigation();

  return (
    <RectButton
      title={title}
      style={[styles.button]}
      onPress={() => {
        navigation.navigate('Know Your Rights Tabs', {
          screen: 'Human Rights',
        });
        // eslint-disable-next-line no-console
        console.log(title);
      }}
    >
      <View accessible>
        <ButtonText style={styles.ButtonText}>{title}</ButtonText>
      </View>
    </RectButton>
  );
}

export default SubSectionNavButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 105,
    height: 60,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 5,
  },
  ButtonText: {
    color: colors.primary,
    fontSize: 16,
    textAlign: 'center',
  },
});
