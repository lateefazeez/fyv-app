import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from 'config/colors';

const BasicButton = ({ children, icon, iconColor, style, ...props }) => {
  return (
    <RectButton style={[styles.button, style]} {...props}>
      <View style={styles.buttonContent} accessible>
        {icon && (
          <Icon name={icon} size={20} color={iconColor} style={styles.icon} />
        )}
        <Text style={styles.text}>{children}</Text>
        <Icon name="chevron-right" size={20} color={colors.darkGrey} />
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
    padding: 16,
    elevation: 3,
  },
  buttonContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
