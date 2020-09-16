import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';

const BasicButton = ({ children, icon, style, ...props }) => {
  return (
    <RectButton style={[styles.button, style]} {...props}>
      <View style={styles.buttonContent} accessible>
        {icon && (
          <Icon
            name={icon}
            size={20}
            color={colors.darkGrey}
            style={styles.icon}
          />
        )}
        <Text style={styles.text}>{children}</Text>
      </View>
    </RectButton>
  );
};

export default BasicButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: colors.white,
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
    color: colors.black,
    fontSize: 12,
    marginLeft: 8,
  },
  icon: {
    padding: 0,
    margin: 0,
  },
});