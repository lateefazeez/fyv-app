import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from 'config/colors.json';

const CrossScreenButton = ({ children, icon, style, ...props }) => {
  return (
    <RectButton style={[styles.button, style]} {...props}>
      <View style={styles.buttonContent} accessible>
        <Text style={styles.text}>{children}</Text>
        {icon && (
          <Icon
            name={icon}
            size={20}
            color={colors.darkGrey}
            style={styles.icon}
          />
        )}
      </View>
    </RectButton>
  );
};

export default CrossScreenButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: colors.primary,
    marginBottom: 8,
    width: 220,
    padding: 12,
  },
  buttonContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 14,
    marginRight: 24,
  },
  icon: {
    padding: 0,
    margin: 0,
    color: colors.white,
  },
});
