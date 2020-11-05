import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

import PsychosocialImage from 'assets/sliders/psychosocial.png';
import BiologicalImage from 'assets/sliders/biological.png';
import PhysicalImage from 'assets/sliders/physical.png';
import ChemicalImage from 'assets/sliders/chemical.png';
import colors from 'config/colors.json';

const imagesArray = [
  BiologicalImage,
  ChemicalImage,
  PhysicalImage,
  PsychosocialImage,
];

const slide01 = index => {
  return (
    <View key={index} style={styles.container}>
      <Image style={styles.image} source={BiologicalImage} />
      <View style={styles.headline}>
        <Text style={styles.textBold}>Biological</Text>
      </View>
      <Text style={styles.textDetail}>
        Includes insect stings, allergic reactions, and being in contact with
        viruses.
      </Text>
    </View>
  );
};

const slide02 = index => {
  return (
    <View key={index} style={styles.container}>
      <Image style={styles.image} source={ChemicalImage} />
      <View style={styles.headline}>
        <Text style={styles.textBold}>Chemical</Text>
      </View>
      <Text style={styles.textDetail}>
        Includes cleaning products, paint materials, and toxic chemicals.
      </Text>
    </View>
  );
};

const slide03 = index => {
  return (
    <View key={index} style={styles.container}>
      <Image style={styles.image} source={PhysicalImage} />
      <View style={styles.headline}>
        <Text style={styles.textBold}>Physical</Text>
      </View>
      <Text style={styles.textDetail}>
        Includes using tools all day long, fatigue, being hurt by tools,
        falling, and being burned.
      </Text>
    </View>
  );
};

const slide04 = index => {
  return (
    <View key={index} style={styles.container}>
      <Image style={styles.image} source={PsychosocialImage} />
      <View style={styles.headline}>
        <Text style={styles.textBold}>Psychosocial</Text>
      </View>
      <Text style={styles.textDetail}>
        Includes bullying, intimidation, abuse, chronic stress, rotating shift
        work, and working long hours.
      </Text>
    </View>
  );
};

const getSlides = dataArray => {
  const slides = [];

  for (let i = 0; i < dataArray.length; i++) {
    const imageObject = { image: imagesArray[i] };
    const newObject = { ...dataArray[i], ...imageObject };
    slides.push(newObject);
  }

  return slides.map(slide => {
    return (
      <View key={slide.title} style={styles.container}>
        <Image style={styles.image} source={slide.image} />
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
