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

const MainScreenButton = ({ children, buttonImage, style }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.buttonContainer, style]}>
      <View style={styles.buttonContent}>
        <ImageBackground
          source={buttonImage}
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
        onPress={() => navigation.navigate(children)}
      />
    </View>
  );
};

export default MainScreenButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: 16,

    backgroundColor: colors.lightPrimary,
    borderRadius: 16,
    position: 'relative',

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
    height: 100,
    flexGrow: 1,
  },
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  text: {
    color: colors.white,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 24,
    width: '40%',
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
