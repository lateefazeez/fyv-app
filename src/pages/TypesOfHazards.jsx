import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Slide01,
  Slide02,
  Slide03,
  Slide04,
  Slide05,
  Slide06,
} from './TypesOfHazardsSlides';

import SectionDetailsText from '../components/SectionDetailsText';
import ExternalRefButton from '../components/ExternalRefButton';
import PageHeader from '../components/PageHeader';
import headerImage from '../../assets/placeholder.png';

import colors from '../config/colors';

const TypesOfHazards = () => (
  <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
    <PageHeader source={headerImage} />

    <View style={{ paddingHorizontal: 16, paddingTop: 24 }}>
      <SectionDetailsText>
        There are 6 hazards types that relate to workplace health and safety.
      </SectionDetailsText>
      <SectionDetailsText>
        A common way to indentify hazards is by category:
      </SectionDetailsText>
    </View>
    <Swiper
      style={{ height: 400 }}
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
      <Slide05 />
      <Slide06 />
    </Swiper>

    <View style={{ paddingHorizontal: 16, paddingTop: 0 }}>
      <ExternalRefButton icon="web" style={{ marginBottom: 16 }}>
        Health & Safety Rights
      </ExternalRefButton>
    </View>
  </ScrollView>
);

export default TypesOfHazards;
