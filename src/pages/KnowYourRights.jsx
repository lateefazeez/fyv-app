import React from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BasicButton from '../components/BasicButton';
import PageHeader from '../components/PageHeader';
import SectionDetailsText from '../components/SectionDetailsText';
import SectionTitleText from '../components/SectionTitleText';

import headerImage from '../../assets/workplace_safety.png';

const KnowYourRights = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ flex: 1 }}>
      <PageHeader source={headerImage} />
      <View style={{ padding: 24 }}>
        <SectionTitleText>Know Your Rights</SectionTitleText>
        <SectionDetailsText>
          A safe workplace takes your physical, mental, and emotional safety
          into consideration.
          {'\n'}
          {'\n'}
          Your Safety at work is protected by 3 pieces of legislaton:
        </SectionDetailsText>

        <BasicButton
          onPress={() => {
            navigation.navigate('Know Your Rights Tabs', {
              screen: 'Human Rights',
            });
          }}
        >
          Human Rights
        </BasicButton>

        <BasicButton
          onPress={() => {
            navigation.navigate('Know Your Rights Tabs', {
              screen: 'OHS',
            });
          }}
        >
          Occupational Health and Safety
        </BasicButton>

        <BasicButton
          onPress={() => {
            navigation.navigate('Know Your Rights Tabs', {
              screen: 'Employment Standards',
            });
          }}
        >
          Employment Standards
        </BasicButton>
      </View>
    </ScrollView>
  );
};

export default KnowYourRights;
