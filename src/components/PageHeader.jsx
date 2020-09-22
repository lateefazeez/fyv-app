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
    backgroundColor: colors.mediumGrey,
    alignItems: 'center',
    padding: 48,
  },
  image: {
    height: 120,
    resizeMode: 'contain',
  },
});
