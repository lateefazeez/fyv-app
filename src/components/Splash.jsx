import React, { Component } from 'react';
import { View } from 'react-native';
import SplashImage from 'assets/splash.png';
import * as SplashScreen from 'expo-splash-screen';

import colors from 'config/colors';

class Splash extends Component {
  componentDidMount() {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 2000);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.primary,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <image source={SplashImage} />
      </View>
    );
  }
}

export default Splash;
