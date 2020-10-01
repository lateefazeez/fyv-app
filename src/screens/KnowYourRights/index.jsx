import React from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FloatingButtonFYV from 'components/FloatingButtonFYV';
import BasicButton from 'components/BasicButton';
import PageHeader from 'components/PageHeader';
import Paragraph from 'components/Paragraph';
import Heading from 'components/Heading';

import headerImage from 'assets/headers/knowyourrights.png';

import colors from 'config/colors.json';

const KnowYourRights = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: colors.lightGrey,
        }}
      >
        <PageHeader source={headerImage} />
        <View
          style={{
            backgroundColor: colors.lightGrey,
            paddingHorizontal: 24,
            paddingBottom: 80,
          }}
        >
          <Heading>Know Your Rights</Heading>
          <Paragraph>
            A safe workplace takes your physical, mental, and emotional safety
            into consideration.
          </Paragraph>
          <Paragraph>
            Your safety at work is protected by three pieces of [legislation]:
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
      <FloatingButtonFYV />
    </>
  );
};

export default KnowYourRights;
