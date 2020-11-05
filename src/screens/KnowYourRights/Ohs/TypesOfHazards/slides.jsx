import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

import PsychosocialImage from 'assets/sliders/psychosocial.png';
import BiologicalImage from 'assets/sliders/biological.png';
import PhysicalImage from 'assets/sliders/physical.png';
import ChemicalImage from 'assets/sliders/chemical.png';

import colors from 'config/colors.json';

const images = [
  BiologicalImage,
  ChemicalImage,
  PhysicalImage,
  PsychosocialImage,
];

const getSlides = data => {
  const slides = Object.values(data)
    .map(object => {
      if (object._type === 'slide') return object;
    })
    .filter(object => object !== undefined);

  return slides.map((slide, index) => {
    return (
      <View key={slide.title} style={styles.container}>
        <Image style={styles.image} source={images[index]} />
        <View style={styles.headline}>
          <Text style={styles.textBold}>{slide.title}</Text>
        </View>
        <Text style={styles.textDetail}>{slide.description}</Text>
      </View>
    );
  });
};

export default getSlides;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.effectOne,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    marginBottom: 48,
  },
  headline: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  headlineLonger: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    height: 160,
    marginBottom: 24,
    resizeMode: 'contain',
  },
  text: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 24,
  },
  textBold: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  textDetail: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
    width: '75%',
  },
});
