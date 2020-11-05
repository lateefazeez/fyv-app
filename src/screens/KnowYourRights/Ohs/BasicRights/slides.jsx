import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from 'config/colors.json';

const getSlides = data => {
  const slides = Object.values(data)
    .map(object => {
      if (object._type === 'slide') return object;
    })
    .filter(object => object !== undefined);

  return slides.map((slide, index) => (
    <View
      key={`${slide.title} ${slide.boldTitle}`}
      style={[styles.container, { backgroundColor: slide.backgroundColor.hex }]}
    >
      <View style={styles.headline}>
        <Text style={styles.text}>{`${slide.title} `}</Text>
        <Text style={styles.textBold}>{slide.boldTitle}</Text>
      </View>
      <Text style={styles.textDetail}>{slide.description}</Text>
    </View>
  ));
};

export default getSlides;

const styles = StyleSheet.create({
  container: {
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
  textBold: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  textDetail: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
    textAlign: 'center',
    width: '75%',
    marginTop: 20,
  },
  text: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 24,
  },
  image: {
    height: 120,
    resizeMode: 'contain',
  },
});
