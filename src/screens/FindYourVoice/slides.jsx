import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from 'config/colors.json';

export const InChatRightsSlide01 = () => {
  return (
    <View style={[styles.container, { backgroundColor: colors.effectOne }]}>
      {/* <Image style={styles.image} source={placeholder} /> */}
      <View style={styles.headline}>
        <Text style={styles.text}>1</Text>
      </View>
      <Text style={styles.textDetail}>
        Let your immediate supervisor know that you are uncomfortable and/or
        unsafe, and clearly explain why.
      </Text>
    </View>
  );
};

export const InChatRightsSlide02 = () => {
  return (
    <View style={[styles.container, { backgroundColor: colors.effectOne }]}>
      {/* <Image style={styles.image} source={placeholder} /> */}
      <View style={styles.headline}>
        <Text style={styles.text}>2</Text>
      </View>
      <Text style={styles.textDetail}>
        Give your employer/supervisor a chance and a reasonable timeline to
        provide you with training, and /or make the work safe.
      </Text>
    </View>
  );
};

export const InChatRightsSlide03 = () => {
  return (
    <View style={[styles.container, { backgroundColor: colors.effectOne }]}>
      {/* <Image style={styles.image} source={placeholder} /> */}
      <View style={styles.headline}>
        <Text style={styles.text}>3</Text>
      </View>
      <Text style={styles.textDetail}>
        If you still do not know what to do and/or if the work is still unsafe,
        you have the right to refuse the work without reprisal (consequences).
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headline: {
    width: 50,
    height: 50,
    borderColor: colors.white,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
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
    color: colors.white,
    fontSize: 14,
    textAlign: 'center',
    width: '75%',
    marginTop: 20,
    paddingBottom: 28,
  },
  text: {
    color: colors.white,
    fontSize: 28,
  },
  image: {
    height: 120,
    resizeMode: 'contain',
  },
});
