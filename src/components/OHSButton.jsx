import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from 'config/colors.json';

const OHSButton = ({ children, background, target, style }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.buttonContainer, style]}>
      <View style={styles.buttonContent}>
        <ImageBackground
          source={background}
          style={styles.background}
          imageStyle={{
            borderRadius: 16,
          }}
        >
          <Text numberOfLines={2} style={styles.text}>
            {children}
          </Text>
        </ImageBackground>
      </View>
      <RectButton
        style={styles.ripple}
        onPress={() => navigation.navigate(target || children)}
      />
    </View>
  );
};

export default OHSButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.lightPrimary,
    borderRadius: 16,
    marginBottom: 16,
    position: 'relative',
    height: 160,
    width: '47.5%',

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  buttonContent: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignContent: 'center',
  },
  text: {
    color: colors.white,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
  },
  ripple: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
});
