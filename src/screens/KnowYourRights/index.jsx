import React from 'react';
import { View, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ParsedText from 'react-native-parsed-text';
import ContentSlider from 'components/ContentSlider';
import { testAlert } from 'utils';

import FloatingButtonFYV from 'components/FloatingButtonFYV';
import BasicButton from 'components/BasicButton';
import PageHeader from 'components/PageHeader';
import Paragraph from 'components/Paragraph';
import Heading from 'components/Heading';

import headerImage from 'assets/headers/knowyourrights.png';

import colors from 'config/colors.json';
import slides from './slides';

const KnowYourRights = () => {
  const navigation = useNavigation();

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
            paddingHorizontal: 24,
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
            Your safety at work is protected by three pieces of [legislation]:
          </ParsedText>
        </View>
        <View style={{ paddingBottom: 64 }}>
          <ContentSlider autoplay style={{ height: 280 }} slides={slides} />
        </View>
      </ScrollView>
      <FloatingButtonFYV />
    </>
  );
};

export default KnowYourRights;
