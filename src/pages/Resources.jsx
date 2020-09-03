/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import React from 'react';
import { View, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import call from 'react-native-phone-call';

import PageHeader from '../components/PageHeader';
import SectionTitleText from '../components/SectionTitleText';
import SectionSubtitleText from '../components/SectionSubtitleText';
import SectionDetailsText from '../components/SectionDetailsText';
import BasicButton from '../components/BasicButton';

import headerImage from '../../assets/placeholder.png';
import colors from '../config/colors';

const CallAWHC = {
  number: '+1 780-486-9009',
  prompt: true,
};

const CallCWRC = {
  number: '+1 403-264-8100',
  prompt: true,
};

const Resources = () => (
  <ScrollView style={{ flex: 1 }}>
    <PageHeader source={headerImage} />
    <View style={{ padding: 16 }}>
      <SectionTitleText>Resources</SectionTitleText>

      <SectionDetailsText>
        The Alberta Worker’s Health Centre and Calgary Workers Resource Centre
        provide free help for people who have issues with health and safety and
        worker rights:
      </SectionDetailsText>

      <SectionSubtitleText>Alberta Workers Health Centre</SectionSubtitleText>

      <SectionDetailsText>
        Services are free. They provide a first point of contact for workers
        with occupational health and safety issues in their workplace. They will
        provide support, public legal education, and referrals.
      </SectionDetailsText>

      <BasicButton
        onPress={() => call(CallAWHC).catch(console.error)}
        icon="phone"
        iconColor={colors.primary}
      >
        +1 780-486-9009
      </BasicButton>

      <BasicButton
        onPress={() => {
          Linking.openURL('https://workershealthcentre.ca/');
        }}
        icon="web"
        iconColor={colors.primary}
        style={{ marginBottom: 32 }}
      >
        https://workershealthcentre.ca/
      </BasicButton>

      <SectionSubtitleText>Calgary Workers Resource Centre</SectionSubtitleText>

      <SectionDetailsText>
        They provide free case work and a public legal education program if you
        are having issues understanding your rights in your workplace.
      </SectionDetailsText>

      <BasicButton
        onPress={() => call(CallCWRC).catch(console.error)}
        icon="phone"
        iconColor={colors.primary}
      >
        +1 403-264-8100
      </BasicButton>
    </View>
  </ScrollView>
);

export default Resources;
