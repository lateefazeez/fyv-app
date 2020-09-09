/* eslint-disable prettier/prettier */
import React from 'react';

import { View, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import SectionSubtitleText from '../components/SectionSubtitleText';
import SectionDetailsText from '../components/SectionDetailsText';

import Bvc from '../../assets/bvc.png';
import Alberta from '../../assets/alberta.png';
import AWHC from '../../assets/annotation.png';
import Sodexo from '../../assets/sodexo.png';

const Disclaimer = () => (
  <ScrollView contentContainerStyle={{ padding: 16 }}>
    <SectionDetailsText>
      The purpose of this app is solely to educate workers about workplace
      health and safety regulations, general advice, guidance on your rights,
      and the services available to you.
      {'\n'}
      {'\n'}
      None of the information provided is intended to be used for legal
      purposes.
    </SectionDetailsText>

    <View style={[styles.card, { marginBottom: 16 }]}>
      <SectionDetailsText style={{ marginBottom: 8, fontSize: 12 }}>
        Funded by the
      </SectionDetailsText>
      <SectionSubtitleText style={{ marginBottom: 0 }}>
        Government of Alberta
      </SectionSubtitleText>
      <Image
        style={{
          width: 200,
          resizeMode: 'contain',
          margin: 16,
        }}
        source={Alberta}
      />
    </View>
    <View style={styles.card}>
      <SectionDetailsText style={{ marginBottom: 24, fontSize: 12 }}>
        In partnership with:
      </SectionDetailsText>
      <View style={styles.bvc}>
        <Image
          style={{
            width: 220,
            resizeMode: 'contain',
          }}
          source={Bvc}
        />
      </View>

      <Image
        style={{
          width: 120,
          resizeMode: 'contain',
          marginVertical: 16,
        }}
        source={Sodexo}
      />
      <Image
        style={{
          width: 180,
          resizeMode: 'contain',
          marginTop: -16,
        }}
        source={AWHC}
      />
    </View>
  </ScrollView>
);

export default Disclaimer;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 32,
    borderRadius: 10,
    elevation: 2,
  },
  bvc: {
    width: 240,
    backgroundColor: '#004E95',
    alignItems: 'center',
    padding: 8,
    marginBottom: 8,
  },
});
