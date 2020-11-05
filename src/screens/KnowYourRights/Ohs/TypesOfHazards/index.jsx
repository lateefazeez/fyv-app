import React, { useState, useEffect } from 'react';
import { View, ScrollView, Alert } from 'react-native';

import FloatingButtonFYV from 'components/FloatingButtonFYV';
import Paragraph from 'components/Paragraph';
import PageHeader from 'components/PageHeader';
import Heading from 'components/Heading';
import ResourceCard from 'components/ResourceCard';
import ContentSlider from 'components/ContentSlider';
import Loading from 'components/Loading';
import getData from 'utils/getData';

import headerImage from 'assets/headers/typesofhazards.png';

import colors from 'config/colors.json';
import getSlides from './slides';

const TypesOfHazards = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [slides, setSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData('TYPES_OF_HAZARDS').then(response => {
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
          backgroundColor: colors.lightGrey,
        }}
      >
        <PageHeader source={headerImage} />

        <View style={{ paddingHorizontal: 24 }}>
          <Heading>Types of Hazards</Heading>
          <Paragraph>{data.description}</Paragraph>
        </View>

        <ContentSlider showsButtons slides={slides} />

        <View
          style={{
            paddingHorizontal: 24,
            paddingBottom: 80,
          }}
        >
          <ResourceCard
            title={data.customResourceCard.name}
            content={data.customResourceCard.content}
          />

          <Paragraph>{data.paragraph}</Paragraph>

          <ResourceCard
            title={data.resourceCard.name}
            content={data.resourceCard.content}
          />
        </View>
      </ScrollView>
      <FloatingButtonFYV />
    </>
  );
};

export default TypesOfHazards;
