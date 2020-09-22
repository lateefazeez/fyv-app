import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from 'config/colors.json';

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
    width: 220,
  },
  buttonContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  text: {
    color: colors.primary,
    fontSize: 14,
    marginLeft: 8,
  },
  icon: {
    padding: 0,
    margin: 0,
    color: colors.primary,
  },
});
