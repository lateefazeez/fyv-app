import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Step1Image from 'assets/sliders/wcb_step1.png';
import Step2Image from 'assets/sliders/wcb_step2.png';
import Step3Image from 'assets/sliders/wcb_step3.png';

import colors from 'config/colors.json';

const images = [Step1Image, Step2Image, Step3Image];

const getSlides = data => {
  const slides = Object.values(data)
    .map(object => {
      if (object._type === 'slide') return object;
    })
    .filter(object => object !== undefined);

  return slides.map((slide, index) => {
    return (
      <View key={slide.title} style={styles.container}>
        <View style={styles.upperContainer}>
          <Image style={styles.image} source={images[index]} />
        </View>

        <View style={styles.lowerContainer}>
          <View style={styles.headline}>
            <Text style={styles.textHeading}>
              {slide.boldTitle || slide.title}
            </Text>
          </View>
          <Text style={styles.textTitle}>{slide.description}</Text>
        </View>
      </View>
    );
  });
};

export default getSlides;

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
