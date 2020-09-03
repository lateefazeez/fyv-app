import React from 'react';
import { View, StyleSheet, Platform, Text } from 'react-native';

import colors from '../config/colors';
import TypeOfHazardsViewPager from '../components/TypeOfHazardsViewPager';
import SubSectionNavButton from '../components/SubSectionNavButton';

const TypesOfHazards = () => {
  return (
    <View style={{ flex: 1, paddingBottom: 30 }}>
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
        <Text style={styles.sectionDetailsText}>
          As workers, we have legal responsibility to follow the health and
          safety rules, to not cause or participate in harassment, bullying, or
          violence, and to report unsafe work conditions. Although it is not
          always easy to do so, failure to do so can have serious consequences
          (such as undocumented injuries, or workplaces that remain unsafe).
          There are 4 hazards that relate to workplace health and safety:
        </Text>
      </View>
      <View
        style={{
          height: 650,
          backgroundColor: colors.effect,
        }}
      >
        <TypeOfHazardsViewPager />
      </View>
      <View
        style={{
          backgroundColor: colors.white,
          padding: 20,

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
export default TypesOfHazards;

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
