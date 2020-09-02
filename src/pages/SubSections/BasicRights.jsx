import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

import SectionDetailsText from '../../components/SectionDetailsText';

import colors from '../../config/colors';
import BasicRightViewPager from '../../components/BasicRightViewPager';
import SubSectionNavButton from '../../components/SubSectionNavButton';

const BasicRights = () => {
  return (
    <View style={{ flex: 1, paddingBottom: 30 }}>
      <View
        style={{
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
          height: 350,
          backgroundColor: colors.effect,
          padding: 20,
        }}
      >
        <BasicRightViewPager />
      </View>
      <View
        style={{
          backgroundColor: colors.white,
          padding: 20,
          marginBottom: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SubSectionNavButton
          style={{ width: 180, height: 40 }}
          title="Finding Your Voice"
        >
          Finding Your Voice
        </SubSectionNavButton>
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
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
