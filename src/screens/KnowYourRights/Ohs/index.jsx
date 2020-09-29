import React from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';

import Paragraph from 'components/Paragraph';
import Heading from 'components/Heading';
import BasicButton from 'components/BasicButton';
import ExternalRefButton from 'components/ExternalRefButton';
import PageHeader from 'components/PageHeader';

import headerImage from 'assets/placeholder.png';
import colors from 'config/colors.json';

const Ohs = () => {
  const navigation = useNavigation();

  return (
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
        <Heading>Occupational Health & Safety</Heading>
        <Paragraph>
          Most workers in Alberta are protected under the Alberta Health and
          Safety Act, Regulation and Code. Some workers, such as federal
          workers, live in care-givers, or farm workers may have their own
          separate laws.
        </Paragraph>
        <Paragraph>
          These laws are the minimum standards for protecting workers, and
          involve both workers and employers.
        </Paragraph>

        <Paragraph>
          Workers in Alberta are also covered by the Alberta Workers’
          Compensation Board (WCB) in the case of injury.
        </Paragraph>
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
            navigation.navigate('Types of Hazards');
          }}
        >
          Types of Hazards
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
            navigation.navigate("Workers' Compensation");
          }}
        >
          Workers' Compensation Board
        </BasicButton>

        <ExternalRefButton
          icon="web"
          onPress={() => {
            WebBrowser.openBrowserAsync(
              'https://www.alberta.ca/ohs-legislation.aspx',
            );
          }}
          iconColor={colors.primary}
          style={{
            marginTop: 32,
          }}
        >
          Current Legislation
        </ExternalRefButton>
      </View>
    </ScrollView>
  );
};

export default Ohs;
