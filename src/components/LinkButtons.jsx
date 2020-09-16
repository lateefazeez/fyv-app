import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from 'config/colors';

const LinkButtons = ({
  children,
  icon,
  iconName,
  iconColor,
  style,
  ...props
}) => {
  return (
    <RectButton style={[styles.button, style]} {...props}>
      <View style={styles.buttonContent} accessible>
        {icon && (
          <Icon name={icon} size={20} color={iconColor} style={styles.icon} />
        )}
        <Icon
          name={iconName}
          size={20}
          color={colors.darkGrey}
          style={styles.icon}
        />
        <Text style={styles.text}>{children}</Text>
      </View>
    </RectButton>
  );
};

export default LinkButtons;

const styles = StyleSheet.create({
  button: {
    width: '65%',
    borderRadius: 10,
    backgroundColor: colors.white,
    marginBottom: 8,
    padding: 12,
    elevation: 3,
  },
  buttonContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  text: {
    color: colors.black,
    fontSize: 14,
  },
});
