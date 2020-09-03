/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SectionDetailsText from '../../components/SectionDetailsText';
import SectionTitleText from '../../components/SectionTitleText';
import BasicButton from '../../components/BasicButton';
import ExternalRefButton from '../../components/ExternalRefButton';
import PageHeader from '../../components/PageHeader';
import headerImage from '../../../assets/placeholder.png';

const Ohs = () => {
  const navigation = useNavigation();

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
