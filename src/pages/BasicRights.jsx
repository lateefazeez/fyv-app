/* eslint-disable prettier/prettier */
import React from 'react';
import {  View, ScrollView, StyleSheet } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Slide01, Slide02, Slide03, Slide04 } from './BasicRightsSlides';

import SectionDetailsText from '../components/SectionDetailsText';
import ExternalRefButton from '../components/ExternalRefButton';
import PageHeader from '../components/PageHeader';
import headerImage from '../../assets/placeholder.png';

import colors from '../config/colors';

const BasicRights = () => (
  <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
    <PageHeader source={headerImage} />

    <View style={{ paddingHorizontal: 16, paddingTop: 24 }}>
      <SectionDetailsText>
        In Alberta, workers have 4 basic rights that relate to health safety:
      </SectionDetailsText>
    </View>
    <Swiper
      style={styles.wrapper}
      activeDotColor={colors.darkGrey}
      dotColor="rgba(0,0,0,0.2)"
      nextButton={
        <Icon name="chevron-right" size={40} color="rgba(0,0,0,0.2)" />
      }
      prevButton={
        <Icon name="chevron-left" size={40} color="rgba(0,0,0,0.2)" />
      }
      showsButtons
    >
      <Slide01 />
      <Slide02 />
      <Slide03 />
      <Slide04 />
    </Swiper>

    <View style={{ paddingHorizontal: 16, paddingTop: 0 }}>
      <SectionDetailsText>
        As workers, we must follow the health and safety rules. We must not
        cause or participate in harassment, bullying, or violence, and we must
        report unsafe work conditions. This is part of Canadian law.
        {'\n'}
        {'\n'}
        It is not always easy to do so, but if we do not follow these rules
        there can be serious consequences (such as undocumented injuries, or
        workplaces that remain unsafe)
      </SectionDetailsText>
      <ExternalRefButton icon="web" style={{ marginBottom: 16 }}>
        Health & Safety Rights
      </ExternalRefButton>
    </View>
  </ScrollView>
);

export default BasicRights;

const styles = StyleSheet.create({
  wrapper: { height: 400 },
  textDetail: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 24,
  },
  buttonText: { color: 'white', fontSize: 80 },
});
