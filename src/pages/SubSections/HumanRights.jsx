/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader';
import SectionTitleText from '../../components/SectionTitleText';
import SectionDetailsText from '../../components/SectionDetailsText';
import ExternalRefButton from '../../components/ExternalRefButton';

import headerImage from '../../../assets/placeholder.png';

const HumanRights = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <PageHeader source={headerImage} />
      <View style={{ padding: 16 }}>
        <SectionTitleText>Human Rights</SectionTitleText>

        <SectionDetailsText>
          In addition to workplace safety, hazards, rights, and standards,
          Alberta has legislation that relates to the rights of all people,
          regardless of background such as ethnocultural group, source of
          income, participation in a labour union, gender, age, sexual
          orientation, or immigration status:
        </SectionDetailsText>

        <ExternalRefButton icon="file-download" style={{ marginBottom: 32 }}>
          Alberta Human Rights
        </ExternalRefButton>

        <SectionDetailsText>
          Human Rights in Alberta relate to the idea that everyone should be
          free from discrimination, and apply to employers and workers. In cases
          of human rights violations specific steps need to be taken.
        </SectionDetailsText>

        <ExternalRefButton icon="file-download" style={{ marginBottom: 32 }}>
          Complainants Guide
        </ExternalRefButton>
      </View>
    </ScrollView>
  );
};
<<<<<<< HEAD
export default HumanRights;
/*
const styles = StyleSheet.create({
  BottomNavigation: {
    width: '100%',
    height: 160,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: 5,
  },

  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 105,
    height: 60,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 30,
  },
  ohsButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 105,
    height: 60,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 30,
    backgroundColor: colors.primary,
  },
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  sectionDetails: {
    width: '100%',
    height: 230,
    backgroundColor: colors.pageDetailsBackground,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  sectionDetailsText: {
    marginTop: 30,
    alignSelf: 'flex-start',
    lineHeight: Platform.OS === 'android' ? 25 : 22,
  },
  sectionTitleText: {
    width: 200,
    textAlign: 'center',
  },
  textContainer: {
    width: Platform.OS === 'android' ? 265 : 200,
    alignSelf: 'flex-start',
    paddingRight: Platform.OS === 'android' ? 20 : 0,
  },
}); */
=======

export default HumanRights;
>>>>>>> ef019621c73cbb4c823d4011228b8d48b39480e5
