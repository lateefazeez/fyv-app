import React, { useState, useEffect } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import ContentSlider from 'components/ContentSlider';

import getData from 'utils/getData';

import Loading from 'components/Loading';
import FloatingButtonFYV from 'components/FloatingButtonFYV';
import PageHeader from 'components/PageHeader';
import Paragraph from 'components/Paragraph';
import Heading from 'components/Heading';

import headerImage from 'assets/headers/knowyourrights.png';

import colors from 'config/colors.json';
import slides from './slides';

const KnowYourRights = ({ navigation }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData('KNOW_YOUR_RIGHTS').then(response => {
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
          <Paragraph>{data.description}</Paragraph>
        </View>
        <View style={{ paddingBottom: 40 }}>
          <ContentSlider autoplay style={{ height: 256 }} slides={slides} />
        </View>
      </ScrollView>
      <FloatingButtonFYV />
    </>
  );
};

export default KnowYourRights;
