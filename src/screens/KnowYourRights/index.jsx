import React from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ParsedText from 'react-native-parsed-text';
import { testAlert } from 'utils';

import FloatingButtonFYV from 'components/FloatingButtonFYV';
import BasicButton from 'components/BasicButton';
import PageHeader from 'components/PageHeader';
import Paragraph from 'components/Paragraph';
import Heading from 'components/Heading';

import headerImage from 'assets/headers/knowyourrights.png';

import colors from 'config/colors.json';

const KnowYourRights = () => {
  const navigation = useNavigation();

  const highlighted =
    'Your safety at work is protected by three pieces of [legislation]:';

  const renderGlossary = (matchingString, matches) => {
    const pattern = /\[(.*?)\]/i;
    const match = matchingString.match(pattern);
    return `${match[1]}`;
  };

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
          <ParsedText
            style={{
              color: colors.darkerGrey,
              lineHeight: 24,
              fontSize: 16,
              fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
              marginBottom: 24,
              textAlign: 'justify',
            }}
            parse={[
              {
                pattern: /\[(.*?)\]/i,
                style: { fontWeight: 'bold', color: colors.primary },
                onPress: testAlert,
                renderText: renderGlossary,
              },
            ]}
          >
            {highlighted}
          </ParsedText>

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
