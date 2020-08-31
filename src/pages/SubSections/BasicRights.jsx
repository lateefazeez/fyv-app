import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

import SectionDetailsText from '../../components/SectionDetailsText';

import colors from '../../config/colors';
import BasicRightViewPager from '../../components/BasicRightViewPager';

const BasicRights = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: colors.white,
          padding: 30,
          paddingBottom: 30,
        }}
      >
        <SectionDetailsText style={styles.sectionDetailsText}>
          In Alberta, workers have 4 basic rights that relate to health safety:
        </SectionDetailsText>
      </View>
      <View
        style={{
          height: 300,
          backgroundColor: colors.effect,
          marginBottom: 50,
          padding: 10,
        }}
      >
        <BasicRightViewPager />
      </View>
    </View>
  );
};
export default BasicRights;

const styles = StyleSheet.create({
  sectionDetailsText: {
    flex: 1,
    alignSelf: 'flex-start',
    lineHeight: Platform.OS === 'android' ? 25 : 22,
    fontSize: Platform.OS === 'android' ? 16 : 15,
  },
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
