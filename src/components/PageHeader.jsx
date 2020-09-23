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
    flex: 1,
    backgroundColor: colors.mediumGrey,
  },
  image: {
    flex: 1,

    width: '100%',
  },
});
