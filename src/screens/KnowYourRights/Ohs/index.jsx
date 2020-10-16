import React from 'react';
import { View, ScrollView } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import Paragraph from 'components/Paragraph';
import Heading from 'components/Heading';
import OHSButton from 'components/OHSButton';
import ExternalRefButton from 'components/ExternalRefButton';
import PageHeader from 'components/PageHeader';

import headerImage from 'assets/headers/ohs.png';
import covidBackground from 'assets/buttons/covid.png';
import hazardsBackground from 'assets/buttons/hazards.png';
import basicrightsBackground from 'assets/buttons/basicrights.png';
import wcbBackground from 'assets/buttons/wcb.png';

import colors from 'config/colors.json';

const Ohs = () => {
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
          paddingHorizontal: 24,
        }}
      >
        <Heading>Occupational Health & Safety</Heading>
        <Paragraph>
          Most workers in Alberta are protected under the Alberta Health and
          Safety Act, Regulation and Code. Some workers, such as federal
          workers, live in caregivers, or farm workers may have their own
          separate laws.
        </Paragraph>
        <Paragraph>
          These laws are the minimum standards for protecting workers and
          involve both workers and employers.
        </Paragraph>

        <Paragraph>
          Workers in Alberta are also covered by the Alberta Workers’
          Compensation Board (WCB) in the case of injury.
        </Paragraph>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 24,
          justifyContent: 'space-between',
        }}
      >
        <OHSButton target="COVID-19 Information" background={covidBackground}>
          Important COVID-19 Information
        </OHSButton>
        <OHSButton background={hazardsBackground}>Types of Hazards</OHSButton>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 24,
          justifyContent: 'space-between',
        }}
      >
        <OHSButton background={basicrightsBackground}>Basic Rights</OHSButton>

        <OHSButton target={"Workers' Compensation"} background={wcbBackground}>
          Workers' Compensation Board
        </OHSButton>
      </View>

      <View
        style={{
          paddingHorizontal: 24,
          paddingBottom: 80,
        }}
      >
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
