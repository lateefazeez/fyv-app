import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

import placeholder from '../../assets/placeholder.png';
import PsychosocialImage from '../../assets/psychosocial_image.png';
import BiologicalImage from '../../assets/suit.png';
import PhysicalImage from '../../assets/man.png';
import ChemicalImage from '../../assets/chemical_image.png';
import colors from '../config/colors';

export const Slide01 = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={BiologicalImage} />
      <View style={styles.headline}>
        <Text style={styles.textBold}>Biological</Text>
      </View>
      <Text style={styles.textDetail}>
        bacteria, viruses, insects, plants, birds, animals, and humans, etc.
      </Text>
    </View>
  );
};

export const Slide02 = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={ChemicalImage} />
      <View style={styles.headline}>
        <Text style={styles.textBold}>Chemical</Text>
      </View>
      <Text style={styles.textDetail}>
        depends on the physical, chemical and toxic properties of the chemical.
      </Text>
    </View>
  );
};

export const Slide03 = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={placeholder} />
      <View style={styles.headline}>
        <Text style={styles.textBold}>Ergonomic</Text>
      </View>
      <Text style={styles.textDetail}>
        repetitive movements, improper set up of workstation, etc..
      </Text>
    </View>
  );
};

export const Slide04 = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={PhysicalImage} />
      <View style={styles.headline}>
        <Text style={styles.textBold}>Physical</Text>
      </View>
      <Text style={styles.textDetail}>
        Physical hazards are common in places such as nursing homes and
        construction sites.
      </Text>
    </View>
  );
};

export const Slide05 = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={PsychosocialImage} />
      <View style={styles.headline}>
        <Text style={styles.textBold}>Psychosocial</Text>
      </View>
      <Text style={styles.textDetail}>stress, violence, etc.</Text>
    </View>
  );
};

export const Slide06 = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={placeholder} />
      <View style={styles.headline}>
        <Text style={styles.textBold}>Safety</Text>
      </View>
      <Text style={styles.textDetail}>
        slipping/tripping hazards, inappropriate machine guarding, equipment
        malfunctions or breakdowns.
      </Text>
    </View>
  );
};

export const Slides = [Slide01, Slide02, Slide03, Slide04, Slide05, Slide06];

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGrey,
    elevation: 5,
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
    color: 'rgba(255,255,255,1)',
    fontSize: 24,
    fontWeight: 'bold',
  },
  textDetail: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
    textAlign: 'justify',
    marginTop: 16,
    width: '75%',
  },
});
