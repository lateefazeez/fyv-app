import React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import colors from 'config/colors';

const FloatingButtonFYV = props => {
  const navigation = useNavigation();

  return (
    <FAB
      onPress={() => navigation.navigate('Find Your Voice')}
      style={styles.fab}
      icon="comment-processing"
      color="white"
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: colors.fabButton,
  },
});

export default FloatingButtonFYV;
