import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

import SectionDetailsText from '../../components/SectionDetailsText';
import colors from '../../config/colors';
import AppViewPager from '../../components/AppViewPager';

const BasicRights = () => {
  return (
    <View>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: colors.white,
          height: Platform.OS === 'android' ? 380 : 350,
          padding: 30,
        }}
      >
        <SectionDetailsText style={styles.sectionDetailsText}>
          In Alberta, workers have 4 basic rights that relate to health safety:
        </SectionDetailsText>
        <AppViewPager />
      </View>
    </View>
  );
};
export default BasicRights;

const styles = StyleSheet.create({
  sectionDetailsText: {
    alignSelf: 'flex-start',
    lineHeight: Platform.OS === 'android' ? 25 : 22,
    fontSize: Platform.OS === 'android' ? 16 : 15,
  },
});
