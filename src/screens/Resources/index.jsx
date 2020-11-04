import React, { useEffect, useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';

import FloatingButtonFYV from 'components/FloatingButtonFYV';
import PageHeader from 'components/PageHeader';
import Heading from 'components/Heading';
import ResourceCard from 'components/ResourceCard';
import Loading from 'components/Loading';

import getData from 'utils/getData';

import headerImage from 'assets/headers/resources.png';
import colors from 'config/colors.json';

const Resources = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData('RESOURCES').then(response => {
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
            paddingBottom: 80,
          }}
        >
          <Heading>Resources</Heading>

          {data.map(object => (
            <ResourceCard
              key={object.name}
              title={object.name}
              content={object.content}
            />
          ))}
        </View>
      </ScrollView>
      <FloatingButtonFYV />
    </>
  );
};

export default Resources;
