import React from 'react';
import { IconButton } from 'react-native-paper';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';

import colors from 'config/colors.json';

const RoundButton = ({ type, target, ...props }) => {
  const handlePress = async () => {
    if (type === 'web') {
      await WebBrowser.openBrowserAsync(target);
    }

    if (type === 'phone') Linking.openURL(`tel://${target}`);
  };

  return (
    <IconButton
      color={colors.white}
      size={24}
      style={{ backgroundColor: colors.primary }}
      onPress={handlePress}
      icon={(type === 'web' && 'web') || (type === 'phone' && 'phone')}
      {...props}
    />
  );
};

export default RoundButton;
