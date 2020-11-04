import React, { useState, useEffect } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import getData from 'utils/getData';
import Loading from 'components/Loading';

import PageHeader from 'components/PageHeader';
import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import ExternalRefButton from 'components/ExternalRefButton';
import ResourceCard from 'components/ResourceCard';

import colors from 'config/colors.json';

import headerImage from 'assets/headers/employmentstandards.png';

const EmploymentStandards = ({ navigation }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData('EMPLOYMENT_STANDARDS').then(response => {
      if (response) {
        setData(response);
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
        <Heading>Employment Standards</Heading>

        <Paragraph>{data.mainParagraph}</Paragraph>

        <ResourceCard
          title={data.resourceCard.name}
          content={data.resourceCard.content}
        />

        <Paragraph style={{ marginTop: 16 }}>{data.finalParagraph}</Paragraph>

        <ExternalRefButton
          icon={data.button.type}
          onPress={() => WebBrowser.openBrowserAsync(data.button.url)}
        >
          {data.button.label}
        </ExternalRefButton>
      </View>
    </ScrollView>
  );
};

export default EmploymentStandards;
