import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import colors from 'config/colors.json';

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
    alignItems: 'center',
    backgroundColor: colors.primary,
    justifyContent: 'center',

    position: 'relative',
  },
  image: {
    height: 250,
    resizeMode: 'contain',
  },
});
