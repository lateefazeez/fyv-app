import React from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FloatingButtonFYV from 'components/FloatingButtonFYV';
import BasicButton from 'components/BasicButton';
import PageHeader from 'components/PageHeader';
import Paragraph from 'components/Paragraph';
import Heading from 'components/Heading';

import headerImage from 'assets/kyr_3x.png';

import colors from 'config/colors.json';

const KnowYourRights = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <PageHeader source={headerImage} />
        <View style={{ height: 400 }}>
          <View
            style={{
              paddingTop: 25,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              backgroundColor: colors.lightGrey,
              position: 'absolute',
              top: -32,
            }}
          >
            <Heading>Know Your Rights</Heading>
            <View style={{ padding: 24 }}>
              <Paragraph>
                A safe workplace takes your physical, mental, and emotional
                safety into consideration.
              </Paragraph>
              <Paragraph>
                Your safety at work is protected by 3 pieces of legislation
                (laws):
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
          </View>
        </View>
      </ScrollView>
      <FloatingButtonFYV />
    </>
  );
};

export default KnowYourRights;
