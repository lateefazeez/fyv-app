import React from 'react';
import { View, ScrollView, StyleSheet, Linking } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';

import FloatingButton from '../components/FindingYourVoiceFloatingButton';
import Paragraph from '../components/Paragraph';
import ExternalRefButton from '../components/ExternalRefButton';
import PageHeader from '../components/PageHeader';
import CrossScreenButton from '../components/CrossScreenButton';

import {
  Slide01,
  Slide02,
  Slide03,
  Slide04,
  //Slide05,
  //Slide06,
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
            In Alberta, there are 4 hazards that relate to workplace health and
            safety
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
        </Swiper>

        <View style={{ paddingHorizontal: 16, paddingTop: 0 }}>
          <ExternalRefButton
            icon="web"
            onPress={() => {
              WebBrowser.openBrowserAsync(
                'https://www.alberta.ca/workplace-hazards.aspx',
              );
            }}
            style={{ marginBottom: 16, width: '95%' }}
          >
            Alberta Workplace Hazards
          </ExternalRefButton>
        </View>
        <View style={{ paddingHorizontal: 16 }}>
          <Paragraph>
            Employers must make workplaces safe from these hazards.
          </Paragraph>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingBottom: 24,
            backgroundColor: colors.darkerGrey,
            padding: 10,
            marginBottom: 20,
          }}
        >
          <Paragraph style={{ color: colors.white }}>
            Question about Hazards? Contact Alberta OHS. If they don’t know the
            answer, they will point you in the right direction.
          </Paragraph>
          <ExternalRefButton
            icon="web"
            onPress={() => {
              WebBrowser.openBrowserAsync(
                'https://www.alberta.ca/ask-expert.aspx',
              );
            }}
            style={{ marginBottom: 16, width: '70%' }}
          >
            Ask An Expert
          </ExternalRefButton>
          <ExternalRefButton
            onPress={() => Linking.openURL('tel://+18664158690')}
            icon="phone"
            style={{ marginBottom: 16, width: '90%' }}
          >
            +1-866-415-8690 Toll-free
          </ExternalRefButton>
          <Paragraph style={{ color: colors.white }}>
            You can also make an anonymous health and safety complaints to
            Alberta OHS online or by phone
          </Paragraph>
          <CrossScreenButton
            icon="chevron-right"
            onPress={() => {
              navigation.navigate('Resources');
            }}
            style={{ marginBottom: 16, width: '100%' }}
          >
            See Resources
          </CrossScreenButton>
          <Paragraph style={{ color: colors.white }}>
            The complaint can be related to you or another.
          </Paragraph>
        </View>
      </ScrollView>
      <FloatingButton onPress={() => navigation.navigate('Find Your Voice')} />
    </>
  );
};

export default TypesOfHazards;
