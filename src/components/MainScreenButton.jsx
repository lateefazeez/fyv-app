import React from 'react';
import {
  View,
  StyleSheet,
  Image,
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
    <RectButton
      style={styles.buttonContainer}
      onPress={() => navigation.navigate(children)}
    >
      <ImageBackground source={buttonImage} style={styles.buttonImage}>
        <View style={{ marginLeft: 30, width: 100 }}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </ImageBackground>
    </RectButton>
  );
};

export default MainScreenButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 14,
    padding: 0,
    marginBottom: 14,
    height: 150,
  },
  buttonContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    overflow: 'visible',
  },

  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});
