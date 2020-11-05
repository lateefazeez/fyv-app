import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as WebBrowser from 'expo-web-browser';

import FloatingButtonFYV from 'components/FloatingButtonFYV';
import Paragraph from 'components/Paragraph';
import Heading from 'components/Heading';
import ExternalRefButton from 'components/ExternalRefButton';
import PageHeader from 'components/PageHeader';
import ContentSlider from 'components/ContentSlider';
import Loading from 'components/Loading';
import getData from 'utils/getData';

import headerImage from 'assets/headers/basicrights.png';

import colors from 'config/colors.json';
import getSlides from './slides';

const BasicRights = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [slides, setSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData('BASIC_RIGHTS').then(response => {
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
      <ScrollView style={{ flex: 1, backgroundColor: colors.lightGrey }}>
        <PageHeader source={headerImage} />
        <View style={{ paddingHorizontal: 24 }}>
          <Heading>Basic Rights</Heading>
          <Paragraph>{data.description}</Paragraph>
        </View>

        <ContentSlider showsButtons slides={slides} />

        <View
          style={{
            paddingHorizontal: 24,
            paddingBottom: 64,
          }}
        >
          <Paragraph>{data.additionalInformation}</Paragraph>

          <View style={styles.card}>
            <Icon
              name="alert-circle"
              size={30}
              color={colors.red}
              style={styles.icon}
            />
            <Paragraph style={{ color: colors.white }}>
              {data.alertText}
            </Paragraph>
          </View>

          <ExternalRefButton
            icon={data.button.type}
            onPress={async () => {
              await WebBrowser.openBrowserAsync(data.button.url);
            }}
            style={{ marginBottom: 24 }}
          >
            {data.button.label}
          </ExternalRefButton>
        </View>
      </ScrollView>
      <FloatingButtonFYV />
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.darkerGrey,
    alignItems: 'center',
    marginBottom: 24,
    paddingHorizontal: 24,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  icon: {
    alignSelf: 'center',
    margin: 24,
  },
});

export default BasicRights;
