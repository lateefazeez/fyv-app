import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from 'config/colors.json';

export const slide01 = index => {
  return (
    <View
      key={index}
      style={[styles.container, { backgroundColor: colors.effectOne }]}
    >
      <View style={styles.headline}>
        <Text style={styles.headlineText}>1</Text>
      </View>
      <Text style={styles.textDetail}>Tell your employer.</Text>
    </View>
  );
};

export const slide02 = index => {
  return (
    <View
      key={index}
      style={[styles.container, { backgroundColor: colors.effectOne }]}
    >
      <View style={styles.headline}>
        <Text style={styles.headlineText}>2</Text>
      </View>
      <Text style={styles.textDetail}>
        Apply any First Aid and tell your health care provider.
      </Text>
    </View>
  );
};

export const slide03 = index => {
  return (
    <View
      key={index}
      style={[styles.container, { backgroundColor: colors.effectOne }]}
    >
      <View style={styles.headline}>
        <Text style={styles.headlineText}>3</Text>
      </View>
      <Text style={styles.textDetail}>
        Tell the Workers’ Compensation Board.
      </Text>
      <Text style={styles.textSmall}>
        (You can file a report online by clicking the link below)
      </Text>
    </View>
  );
};

const slides = [slide01, slide02, slide03];
export default slides;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
    marginBottom: 48,
  },
  headline: {
    width: 48,
    height: 48,
    borderColor: colors.white,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    marginBottom: 16,
  },
  headlineText: {
    color: colors.white,
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: -2,
  },
  textDetail: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '75%',
  },
  textSmall: {
    color: colors.white,
    fontSize: 14,
    marginTop: 16,
    textAlign: 'center',
    width: '50%',
  },
});
