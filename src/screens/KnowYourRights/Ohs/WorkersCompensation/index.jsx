import React, { useState, useEffect } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import PageHeader from 'components/PageHeader';
import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import ResourceCard from 'components/ResourceCard';
import FloatingButtonFYV from 'components/FloatingButtonFYV';
import ExternalRefButton from 'components/ExternalRefButton';
import ContentSlider from 'components/ContentSlider';
import Loading from 'components/Loading';
import getData from 'utils/getData';

import headerImage from 'assets/headers/wcb.png';

import colors from 'config/colors.json';
import getSlides from './slides';

const WorkersCompensation = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [slides, setSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData('WCB').then(response => {
      if (response) {
        setData(response);
        setSlides(getSlides(response));
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
        }}
      >
        <PageHeader source={headerImage} />

        <View style={{ backgroundColor: colors.lightGrey }}>
          <View style={{ paddingHorizontal: 24 }}>
            <Heading>Workers' Compensation Board</Heading>
            <Paragraph>{data.description}</Paragraph>
          </View>

          <ContentSlider showsButtons slides={slides} />

          <View
            style={{
              flex: 1,
              padding: 24,
              paddingBottom: 80,
            }}
          >
            <ExternalRefButton
              icon={data.button.type}
              onPress={async () => {
                await WebBrowser.openBrowserAsync(data.button.url);
              }}
              style={{ marginBottom: 24 }}
            >
              {data.button.label}
            </ExternalRefButton>

            <Paragraph>{data.additionalInformation}</Paragraph>

            <ResourceCard
              title={data.resourceCard.name}
              content={data.resourceCard.content}
            />
          </View>
        </View>
      </ScrollView>
      <FloatingButtonFYV />
    </>
  );
};

export default WorkersCompensation;
