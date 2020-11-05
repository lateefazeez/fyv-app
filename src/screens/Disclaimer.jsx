import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { TouchableRipple } from 'react-native-paper';

import client from 'services/api';
import getData from 'utils/getData';
import imageUrlBuilder from '@sanity/image-url';

import Loading from 'components/Loading';
import FloatingButtonFYV from 'components/FloatingButtonFYV';
import Paragraph from 'components/Paragraph';
import Subheading from 'components/Subheading';

import colors from 'config/colors.json';

const Disclaimer = ({ navigation }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const builder = imageUrlBuilder(client);

  useEffect(() => {
    getData('DISCLAIMER').then(response => {
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
      <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 88 }}>
        <Paragraph>{data.description}</Paragraph>

        <Subheading>{data.availableLanguagesLabel}</Subheading>

        <View style={[styles.card, { marginBottom: 16 }]}>
          <Paragraph style={{ fontSize: 12 }}>{data.fundingLabel}</Paragraph>
          <TouchableRipple
            onPress={async () => {
              await WebBrowser.openBrowserAsync(data.fundingPartner.url);
            }}
          >
            <Image
              style={{
                height: 72,
                width: data.fundingPartner.imageWidth,
                resizeMode: 'contain',
                margin: 16,
              }}
              source={{
                uri: builder
                  .image(data.fundingPartner.logo.asset)
                  .url()
                  .toString(),
              }}
            />
          </TouchableRipple>
        </View>

        <View style={styles.card}>
          <Paragraph style={{ fontSize: 12 }}>
            {data.partnershipsLabel}
          </Paragraph>
          {data.partners.map(partner => (
            <TouchableRipple
              style={styles.touchable}
              onPress={async () => {
                await WebBrowser.openBrowserAsync(partner.url);
              }}
            >
              <Image
                style={{
                  height: 72,
                  width: partner.imageWidth,
                  resizeMode: 'contain',
                }}
                source={{
                  uri: builder.image(partner.logo.asset).url().toString(),
                }}
              />
            </TouchableRipple>
          ))}
        </View>
      </ScrollView>
      <FloatingButtonFYV />
    </>
  );
};

export default Disclaimer;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    alignItems: 'center',
    padding: 32,
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
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginBottom: 16,
  },
});
