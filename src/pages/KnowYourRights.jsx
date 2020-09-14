import React from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FloatingButton from '../components/FloatingButton';
import BasicButton from '../components/BasicButton';
import PageHeader from '../components/PageHeader';
import Paragraph from '../components/Paragraph';
import Heading from '../components/Heading';

import headerImage from '../../assets/workplace_safety.png';

const KnowYourRights = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <PageHeader source={headerImage} />
        <View style={{ padding: 24 }}>
          <Heading>Know Your Rights</Heading>
          <Paragraph>
            A safe workplace takes your physical, mental, and emotional safety
            into consideration.
          </Paragraph>
          <Paragraph>
            Your safety at work is protected by 3 pieces of legislation (laws):
          </Paragraph>

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
          <BasicButton
            onPress={() => {
              navigation.navigate('Know Your Rights Tabs', {
                screen: 'Human Rights',
              });
            }}
          >
            Human Rights
          </BasicButton>
        </View>
      </ScrollView>
      <FloatingButton onPress={() => navigation.navigate('Find Your Voice')} />
    </>
  );
};

export default KnowYourRights;
