import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from 'config/colors.json';

const BasicButton = ({ children, icon, style, ...props }) => {
  return (
    <View
      style={{
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
      }}
    >
      <RectButton style={[styles.button, style]} {...props}>
        <View style={styles.buttonContent} accessible>
          <View style={styles.buttonLeftSection}>
            {icon && (
              <Icon
                name={icon}
                size={20}
                color={colors.white}
                style={styles.icon}
              />
            )}
            <Text numberOfLines={1} style={styles.text}>
              {children}
            </Text>
          </View>

          <Icon name="chevron-right" size={20} color={colors.white} />
        </View>
      </RectButton>
    </View>
  );
};

export default BasicButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    backgroundColor: colors.primary,
    marginBottom: 8,
    padding: 16,

    shadowColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonLeftSection: {
    flexDirection: 'row',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  text: {
    alignItems: 'center',
    color: colors.white,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
});
