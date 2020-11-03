import React, { useState, useEffect } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import getData from 'utils/getData';
import Loading from 'components/Loading';

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

const Ohs = ({ navigation }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData('OHS').then(response => {
      if (response) {
        setData(response[0]);
        setIsLoading(false);
      } else {
        Alert.alert(
          'Data not found',
          'Something went wrong. Please try again.',
        );
        navigation.goBack();
      }
    });
  }, [navigation]);

  return isLoading ? (
    <Loading />
  ) : (
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
        <Paragraph>{data.description}</Paragraph>
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
          icon={data.button.type}
          onPress={() => {
            WebBrowser.openBrowserAsync(data.button.url);
          }}
          iconColor={colors.primary}
          style={{
            marginTop: 32,
          }}
        >
          {data.button.label}
        </ExternalRefButton>
      </View>
    </ScrollView>
  );
};

export default Ohs;
