import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from 'config/colors.json';

const slide01 = () => {
  return (
    <View style={[styles.container, { backgroundColor: '#0970ac' }]}>
      {/* <Image style={styles.image} source={placeholder} /> */}
      <View style={styles.headline}>
        <Text style={styles.text}>Right to</Text>
        <Text style={styles.textBold}> KNOW</Text>
      </View>
      <Text style={styles.textDetail}>
        about the dangers of our jobs and how we are protected.
      </Text>
    </View>
  );
};

const slide02 = () => {
  return (
    <View style={[styles.container, { backgroundColor: '#80A21F' }]}>
      {/* <Image style={styles.image} source={placeholder} /> */}
      <View style={styles.headline}>
        <Text style={styles.text}>Right to</Text>
        <Text style={styles.textBold}> PARTICIPATE</Text>
      </View>
      <Text style={styles.textDetail}>
        in activities affecting our Health and Safety.
      </Text>
    </View>
  );
};

const slide03 = () => {
  return (
    <View style={[styles.container, { backgroundColor: '#535996' }]}>
      {/* <Image style={styles.image} source={placeholder} /> */}
      <View style={styles.headline}>
        <Text style={styles.text}>Right to</Text>
        <Text style={styles.textBold}> REFUSE WORK</Text>
      </View>
      <Text style={styles.textDetail}>
        that may be dangerous to ourselves or others.
      </Text>
    </View>
  );
};

const slide04 = () => {
  return (
    <View style={[styles.container, { backgroundColor: '#69924f' }]}>
      {/* <Image style={styles.image} source={placeholder} /> */}
      <View style={styles.headlineLonger}>
        <Text style={styles.text}>Right to be</Text>
        <Text style={styles.textBold}>FREE FROM REPRISAL</Text>
      </View>
      <Text style={styles.textDetail}>
        for using our Health and Safety rights.
      </Text>
    </View>
  );
};

const slides = [slide01, slide02, slide03, slide04];
export default slides;

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
