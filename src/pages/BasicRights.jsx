import React from 'react';
import { View, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';

import FloatingButton from '../components/FindingYourVoiceFloatingButton';
import Paragraph from '../components/Paragraph';
import ExternalRefButton from '../components/ExternalRefButton';
import PageHeader from '../components/PageHeader';

import { Slide01, Slide02, Slide03, Slide04 } from './BasicRightsSlides';
import headerImage from '../../assets/placeholder.png';
import colors from '../config/colors';

const BasicRights = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <PageHeader source={headerImage} />

        <View style={{ paddingHorizontal: 16, paddingTop: 24 }}>
          <Paragraph>
            In Alberta, workers have 4 basic rights that relate to health
            safety:
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
          <Paragraph>
            As workers, we must follow the health and safety rules. We must not
            cause or participate in harassment, bullying, or violence, and we
            must report unsafe work conditions. This is part of Canadian law.
          </Paragraph>
          <Paragraph>
            It is not always easy to do so, but if we do not follow these rules
            there can be serious consequences (such as undocumented injuries, or
            workplaces that remain unsafe).
          </Paragraph>
          <ExternalRefButton
            onPress={() =>
              WebBrowser.openBrowserAsync(
                'https://workershealthcentre.ca/4-health-and-safety-rights/',
              )
            }
            icon="web"
            style={{ marginBottom: 16 }}
          >
            Health & Safety Rights
          </ExternalRefButton>
        </View>
      </ScrollView>
      <FloatingButton onPress={() => navigation.navigate('Find Your Voice')} />
    </>
  );
};

export default BasicRights;
