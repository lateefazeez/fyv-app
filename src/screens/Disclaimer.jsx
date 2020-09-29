import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { TouchableRipple } from 'react-native-paper';

import FloatingButtonFYV from 'components/FloatingButtonFYV';
import Paragraph from 'components/Paragraph';
import Subheading from 'components/Subheading';

import colors from 'config/colors.json';

import Bvc from 'assets/bvc_school_of_global_access.png';
import Alberta from 'assets/Alberta-Government-Logo.png';
import AWHC from 'assets/awhc.png';
import Sodexo from 'assets/sodexo.png';

const Disclaimer = () => {
  return (
    <>
      <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 88 }}>
        <Paragraph>
          The purpose of this app is solely to educate workers about workplace
          health and safety regulations, general advice, guidance on your
          rights, and the services available to you.
        </Paragraph>

        <Paragraph>
          None of the information provided is intended to be used for legal
          purposes.
        </Paragraph>

        <Subheading>This app is only available in English.</Subheading>

        <View style={[styles.card, { marginBottom: 16 }]}>
          <Paragraph style={{ fontSize: 12 }}>Funded by</Paragraph>
          <TouchableRipple
            onPress={async () => {
              await WebBrowser.openBrowserAsync('https://www.alberta.ca/');
            }}
          >
            <Image
              style={{
                height: 72,
                width: 200,

                resizeMode: 'contain',
                margin: 16,
              }}
              source={Alberta}
            />
          </TouchableRipple>
        </View>

        <View style={styles.card}>
          <Paragraph style={{ fontSize: 12 }}>In partnership with:</Paragraph>
          <TouchableRipple
            style={styles.touchable}
            onPress={async () => {
              await WebBrowser.openBrowserAsync(
                'https://globalaccess.bowvalleycollege.ca/',
              );
            }}
          >
            <Image
              style={{
                height: 72,
                width: 280,
                resizeMode: 'contain',
              }}
              source={Bvc}
            />
          </TouchableRipple>

          <TouchableRipple
            style={styles.touchable}
            onPress={async () => {
              await WebBrowser.openBrowserAsync('https://ca.sodexo.com/');
            }}
          >
            <Image
              style={{
                height: 72,
                width: 160,
                resizeMode: 'contain',
              }}
              source={Sodexo}
            />
          </TouchableRipple>
          <TouchableRipple
            style={styles.touchable}
            onPress={async () => {
              await WebBrowser.openBrowserAsync(
                'https://workershealthcentre.ca/',
              );
            }}
          >
            <Image
              style={{
                height: 72,
                width: 240,
                resizeMode: 'contain',
              }}
              source={AWHC}
            />
          </TouchableRipple>
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
