/* eslint-disable prettier/prettier */
import React from 'react';
<<<<<<< HEAD
import { View,  Text } from 'react-native';

// import colors from '../../config/colors';
=======
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SectionDetailsText from '../../components/SectionDetailsText';
import SectionTitleText from '../../components/SectionTitleText';
import BasicButton from '../../components/BasicButton';
import ExternalRefButton from '../../components/ExternalRefButton';
import PageHeader from '../../components/PageHeader';
import headerImage from '../../../assets/placeholder.png';
>>>>>>> ef019621c73cbb4c823d4011228b8d48b39480e5

const Ohs = () => {
  const navigation = useNavigation();

<<<<<<< HEAD
export default Ohs;
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
  return (
    <ScrollView style={{ flex: 1 }}>
      <PageHeader source={headerImage} />
      <View style={{ padding: 16 }}>
        <SectionTitleText>Occupational Health and Safety</SectionTitleText>
        <SectionDetailsText>
          Most workers in Alberta are protected under the Alberta Health and
          Safety Act, Regulation and Code. Some workers, such as federal
          workers, live in care-givers, or farm workers may have their own
          separate laws.
          {'\n'}
          {'\n'}
          These laws are the minimum standards for protecting workers, and
          involve both workers and employers.
        </SectionDetailsText>

        <BasicButton
          onPress={() => {
            navigation.navigate('COVID-19 Information');
          }}
          icon="alert-circle"
          iconColor="red"
        >
          Important COVID-19 Information
        </BasicButton>

        <BasicButton
          onPress={() => {
            navigation.navigate('Basic Rights');
          }}
        >
          Basic Rights
        </BasicButton>

        <BasicButton
          onPress={() => {
            navigation.navigate('Types of Hazards');
          }}
        >
          Types of Hazards
        </BasicButton>

        <ExternalRefButton
          icon="link-variant"
          style={{ marginTop: 32, marginBottom: 0 }}
        >
          Current Legislation
        </ExternalRefButton>
      </View>
    </ScrollView>
  );
};

export default Ohs;
>>>>>>> ef019621c73cbb4c823d4011228b8d48b39480e5
