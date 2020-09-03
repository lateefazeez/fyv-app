/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';

const LinkButton = ({ children, name }) => {
  return (
    <Button>
      <View style={styles.buttonContent} accessible>
        <Icon name={name} size={20} color={colors.black} />
        <Text>{children}</Text>
      </View>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 10,
    backgroundColor: colors.lightGrey,
    padding: 16,
  },
  buttonContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default LinkButton;
