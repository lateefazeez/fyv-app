import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

import placeholder from 'assets/placeholder.png';
import PsychosocialImage from 'assets/psy_hazard.png';
import BiologicalImage from 'assets/bio_hazard.png';
import PhysicalImage from 'assets/phy_hazard.png';
import ChemicalImage from 'assets/chem_hazard.png';
import colors from 'config/colors';

export const Slide02 = () => {
  return (
    <View style={styles.container}>
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

export const Slide03 = () => {
  return (
    <View style={styles.container}>
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

export const Slide05 = () => {
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

export const Slide01 = () => {
  return (
    <View style={styles.container}>
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

export const Slide04 = () => {
  return (
    <View style={styles.container}>
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
    backgroundColor: colors.white,
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
    color: colors.black,
    fontSize: 24,
    fontWeight: 'bold',
  },
  textDetail: {
    color: colors.darkGrey,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
    width: '75%',
  },
});
