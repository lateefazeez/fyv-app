import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from 'config/colors.json';

import Step1Image from 'assets/sliders/wcb_step1.png';
import Step2Image from 'assets/sliders/wcb_step2.png';
import Step3Image from 'assets/sliders/wcb_step3.png';

export const slide01 = index => {
  return (
    <View key={index} style={styles.container}>
      <View style={styles.upperContainer}>
        <Image style={styles.image} source={Step1Image} />
      </View>

      <View style={styles.lowerContainer}>
        <View style={styles.headline}>
          <Text style={styles.textHeading}>1</Text>
        </View>
        <Text style={styles.textTitle}>Tell your employer.</Text>
      </View>
    </View>
  );
};

export const slide02 = index => {
  return (
    <View key={index} style={styles.container}>
      <View style={styles.upperContainer}>
        <Image style={styles.image} source={Step2Image} />
      </View>

      <View style={styles.lowerContainer}>
        <View style={styles.headline}>
          <Text style={styles.textHeading}>2</Text>
        </View>
        <Text style={styles.textTitle}>
          Apply any First Aid and tell your health care provider.
        </Text>
      </View>
    </View>
  );
};

export const slide03 = index => {
  return (
    <View key={index} style={styles.container}>
      <View style={styles.upperContainer}>
        <Image style={styles.image} source={Step3Image} />
      </View>

      <View style={styles.lowerContainer}>
        <View style={styles.headline}>
          <Text style={styles.textHeading}>3</Text>
        </View>
        <Text style={styles.textTitle}>
          Tell the Workers’ Compensation Board by filling a report online.
        </Text>
      </View>
    </View>
  );
};

const slides = [slide01, slide02, slide03];
export default slides;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    marginBottom: 48,
  },
  upperContainer: {
    flex: 1.75,
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  lowerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.effectOne,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingHorizontal: 16,
  },
  headline: {
    width: 32,
    height: 32,
    borderColor: colors.white,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 8,
  },
  textHeading: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: -2,
  },
  textTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textSmall: {
    color: colors.white,
    fontSize: 14,
    marginTop: 16,
    textAlign: 'center',
  },
});
