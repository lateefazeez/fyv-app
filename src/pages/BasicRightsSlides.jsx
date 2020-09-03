import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

import placeholder from '../../assets/placeholder.png';

export const Slide01 = () => {
  return (
    <View style={[styles.container, { backgroundColor: '#0084BE' }]}>
      <Image style={styles.image} source={placeholder} />
      <View style={styles.headline}>
        <Text style={styles.text}>Right to</Text>
        <Text style={styles.textBold}> KNOW</Text>
      </View>
      <Text style={styles.textDetail}>
        about the dangers of our jobs
        {'\n'}
        and how we are protected
      </Text>
    </View>
  );
};

export const Slide02 = () => {
  return (
    <View style={[styles.container, { backgroundColor: '#5770BA' }]}>
      <Image style={styles.image} source={placeholder} />
      <View style={styles.headline}>
        <Text style={styles.text}>Right to</Text>
        <Text style={styles.textBold}> PARTICIPATE</Text>
      </View>
      <Text style={styles.textDetail}>
        in activities affecting our Health
        {'\n'}
        and Safety
      </Text>
    </View>
  );
};

export const Slide03 = () => {
  return (
    <View style={[styles.container, { backgroundColor: '#8C569F' }]}>
      <Image style={styles.image} source={placeholder} />
      <View style={styles.headline}>
        <Text style={styles.text}>Right to</Text>
        <Text style={styles.textBold}> REFUSE WORK</Text>
      </View>
      <Text style={styles.textDetail}>
        that may be dangerous to ourselves or others
      </Text>
    </View>
  );
};

export const Slide04 = () => {
  return (
    <View style={[styles.container, { backgroundColor: '#A63B71' }]}>
      <Image style={styles.image} source={placeholder} />
      <View style={styles.headlineLonger}>
        <Text style={styles.text}>Right to be</Text>
        <Text style={styles.textBold}>FREE FROM REPRISAL</Text>
      </View>
      <Text style={styles.textDetail}>
        for using our Health and Safety rights
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  textBold: {
    color: 'rgba(255,255,255,1)',
    fontSize: 24,
    fontWeight: 'bold',
  },
  textDetail: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
    textAlign: 'justify',
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
