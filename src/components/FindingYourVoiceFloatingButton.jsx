import React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

import colors from '../config/colors';

const FloatingButton = props => (
  <FAB
    style={styles.fab}
    small
    icon="chat-processing"
    color="white"
    {...props}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: colors.fabButton,
  },
});

export default FloatingButton;
