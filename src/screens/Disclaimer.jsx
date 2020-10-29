import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { TouchableRipple, ActivityIndicator } from 'react-native-paper';

import client from 'services/api';
import imageUrlBuilder from '@sanity/image-url';

import FloatingButtonFYV from 'components/FloatingButtonFYV';
import Paragraph from 'components/Paragraph';
import Subheading from 'components/Subheading';

import colors from 'config/colors.json';

// import Bvc from 'assets/logos/bvc.png';
// import Alberta from 'assets/logos/alberta.png';
// import AWHC from 'assets/logos/awhc.png';
// import Sodexo from 'assets/logos/sodexo.png';

const Disclaimer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const builder = imageUrlBuilder(client);
  let fundingPartnerLogoURL = '';

  useEffect(() => {
    client.fetch('*[_type == "disclaimer"][0]').then(response => {
      setData(response);
      setIsLoading(false);

      fundingPartnerLogoURL = builder
        .image(response.fundingPartner.logo.asset)
        .url()
        .toString();

      console.log('fundingPartnerLogoURL: ', fundingPartnerLogoURL);
    });
  }, []);

  return isLoading ? (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator animating color={colors.primary} />
    </View>
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
