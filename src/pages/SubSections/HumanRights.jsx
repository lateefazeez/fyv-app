import React from 'react';
import { View, StyleSheet } from 'react-native';

const MyPager = () => {
  return <View style={{ flex: 1 }} />;
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyPager;
