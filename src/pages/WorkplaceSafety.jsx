import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../config/colors';

const Stack = createStackNavigator();

const WorkplaceSafety = () => <View style={styles.pageContainer}></View>;

export default WorkplaceSafety;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
