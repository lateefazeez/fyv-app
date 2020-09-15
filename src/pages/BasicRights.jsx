import React from 'react';
import { View, ScrollView, StyleSheet, Linking } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';

import FloatingButton from '../components/FloatingButton';
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
          <Icon
            name="alert-circle"
            size={30}
            color={colors.red}
            style={styles.icon}
          />
          <Paragraph style={{ color: colors.white }}>
            Workplaces in Alberta have been affected by COVID-19. This has left
            many workers wondering how they can protect themselves from the
            virus. Workers continue to have the Rights to refuse dangerous work
            and be free from reprisal, but it is important to follow the correct
            process under OHS law.
          </Paragraph>
          <ExternalRefButton
            icon="web"
            onPress={() => {
              WebBrowser.openBrowserAsync(
                'https://workershealthcentre.ca/right-to-refuse/',
              );
            }}
            style={{ marginBottom: 16, width: '70%' }}
          >
            Click Here for the process
          </ExternalRefButton>
        </View>
      </ScrollView>
      <FloatingButton onPress={() => navigation.navigate('Find Your Voice')} />
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    padding: 0,
    margin: 0,
  },
});

export default BasicRights;
