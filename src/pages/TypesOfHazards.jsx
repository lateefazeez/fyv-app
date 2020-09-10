import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import FloatingButton from '../components/FindingYourVoiceFloatingButton';
import Paragraph from '../components/Paragraph';
import ExternalRefButton from '../components/ExternalRefButton';
import PageHeader from '../components/PageHeader';

import {
  Slide01,
  Slide02,
  Slide03,
  Slide04,
  Slide05,
  Slide06,
} from './TypesOfHazardsSlides';
import headerImage from '../../assets/placeholder.png';

import colors from '../config/colors';

const TypesOfHazards = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <PageHeader source={headerImage} />

        <View style={{ paddingHorizontal: 16, paddingTop: 24 }}>
          <Paragraph>
            There are 6 hazards types that relate to workplace health and
            safety.
          </Paragraph>
          <Paragraph>
            A common way to indentify hazards is by category:
          </Paragraph>
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
      <FloatingButton
        onPress={() => navigation.navigate('Finding Your Voice')}
      />
    </>
  );
};

export default TypesOfHazards;
