/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import colors from '../config/colors';

function PageHeader({ source }) {
  return (
    <View style={styles.header}>
      <Image source={source} style={styles.image} />
    </View>
  );
}

export default PageHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.pageDetailsBackground,
    alignItems: 'center',
    padding: 48,
  },
  image: {
    height: 120,
    resizeMode: 'contain',
  },
});
