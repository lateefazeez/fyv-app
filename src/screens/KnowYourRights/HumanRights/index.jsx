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
        <Heading>Human Rights</Heading>
        <Paragraph>{data.paragraph1}</Paragraph>

        <ExternalRefButton
          icon={data.linkbutton1.type}
          onPress={() => WebBrowser.openBrowserAsync(data.linkbutton1.url)}
          style={{ marginBottom: 36 }}
        >
          {data.linkbutton1.label}
        </ExternalRefButton>

        <Paragraph>{data.paragraph2}</Paragraph>

        <ExternalRefButton
          icon={data.linkbutton2.type}
          onPress={() => WebBrowser.openBrowserAsync(data.linkbutton2.url)}
        >
          {data.linkbutton2.label}
        </ExternalRefButton>
      </View>
    </ScrollView>
  );
};

export default HumanRights;
