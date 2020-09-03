import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Paragraph, Subheading, Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import SectionTitleText from '../components/SectionTitleText';
import SectionSubtitleText from '../components/SectionSubtitleText';
import SectionDetailsText from '../components/SectionDetailsText';

import colors from '../config/colors';
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

    <View
      style={{
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 48,
        borderRadius: 10,
        elevation: 2,
      }}
    >
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
          marginTop: 24,
          marginBottom: 48,
        }}
        source={Alberta}
      />

      <SectionDetailsText style={{ marginBottom: 24, fontSize: 12 }}>
        In partnership with:
      </SectionDetailsText>
      <View
        style={{
          width: 240,
          backgroundColor: '#004E95',
          alignItems: 'center',
          padding: 8,
          marginBottom: 8,
        }}
      >
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
