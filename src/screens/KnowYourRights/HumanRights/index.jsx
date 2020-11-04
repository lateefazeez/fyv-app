import React, { useState, useEffect } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import getData from 'utils/getData';
import Loading from 'components/Loading';

import PageHeader from 'components/PageHeader';
import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import ExternalRefButton from 'components/ExternalRefButton';

import headerImage from 'assets/headers/humanrights.png';
import colors from 'config/colors.json';

const HumanRights = ({ navigation }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData('HUMAN_RIGHTS').then(response => {
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
          backgroundColor: colors.lightGrey,
          paddingHorizontal: 24,
          paddingBottom: 80,
        }}
      >
        <Heading>Human Rights</Heading>
        <Paragraph>
          In addition to workplace safety, hazards, rights, and standards,
          Alberta has [legislation] that relates to the rights of all people,
          regardless of background such as [ethnocultural] group, source of
          income, participation in a labour union, gender, age, [sexual
          orientation], or immigration status.
        </Paragraph>

        <ExternalRefButton
          icon="file-download"
          onPress={() =>
            WebBrowser.openBrowserAsync(
              'https://www.albertahumanrights.ab.ca/Documents/HR_in_AB_printable_booklet.pdf',
            )
          }
          style={{ marginBottom: 36 }}
        >
          Alberta Human Rights
        </ExternalRefButton>

        <Paragraph>
          Human Rights in Alberta relate to the idea that everyone should be
          free from [discrimination], and applies to employers and workers. In
          cases of human rights violations specific steps need to be taken.
        </Paragraph>

        <ExternalRefButton
          icon="file-download"
          onPress={() =>
            WebBrowser.openBrowserAsync(
              'https://www.albertahumanrights.ab.ca/Documents/GuideProcess_Complainants.pdf',
            )
          }
        >
          Complainants Guide
        </ExternalRefButton>
      </View>
    </ScrollView>
  );
};

export default HumanRights;
