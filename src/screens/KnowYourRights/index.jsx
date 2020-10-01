import React from 'react';
import { View, ScrollView } from 'react-native';
import ContentSlider from 'components/ContentSlider';

import FloatingButtonFYV from 'components/FloatingButtonFYV';
import PageHeader from 'components/PageHeader';
import Paragraph from 'components/Paragraph';
import Heading from 'components/Heading';

import headerImage from 'assets/headers/knowyourrights.png';

import colors from 'config/colors.json';
import slides from './slides';

const KnowYourRights = () => {
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
          <Paragraph>
            Your safety at work is protected by three pieces of [legislation]:
          </Paragraph>
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
