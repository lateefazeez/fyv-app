import React from 'react';
import { View, Linking } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import FloatingButton from '../components/FindingYourVoiceFloatingButton';
import PageHeader from '../components/PageHeader';
import Heading from '../components/Heading';
import Subheading from '../components/Subheading';
import Paragraph from '../components/Paragraph';
import BasicButton from '../components/BasicButton';

import headerImage from '../../assets/placeholder.png';
import colors from '../config/colors';

const Resources = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <PageHeader source={headerImage} />
        <View style={{ padding: 16 }}>
          <Heading>Resources</Heading>

          <Paragraph>
            The Alberta Worker’s Health Centre and Calgary Workers Resource
            Centre provide free help for people who have issues with health and
            safety and worker rights:
          </Paragraph>

          <Subheading>Alberta Workers Health Centre</Subheading>

          <Paragraph>
            Services are free. They provide a first point of contact for workers
            with occupational health and safety issues in their workplace. They
            will provide support, public legal education, and referrals.
          </Paragraph>

          <BasicButton
            onPress={() => Linking.openURL('tel://+17804869009')}
            icon="phone"
            iconColor={colors.primary}
          >
            +1 780-486-9009 (Toll-free)
          </BasicButton>

          <BasicButton
            onPress={() => {
              WebBrowser.openBrowserAsync('https://workershealthcentre.ca');
            }}
            icon="web"
            iconColor={colors.primary}
            style={{ marginBottom: 32 }}
          >
            https://workershealthcentre.ca/
          </BasicButton>

          <Subheading>Calgary Workers Resource Centre</Subheading>

          <Paragraph>
            They provide free case work and a public legal education program if
            you are having issues understanding your rights in your workplace.
          </Paragraph>

          <BasicButton
            onPress={() => Linking.openURL('tel://+14032648100')}
            icon="phone"
            iconColor={colors.primary}
            style={{ marginBottom: 32 }}
          >
            +1 403-264-8100 (Toll-free)
          </BasicButton>
          <Subheading>Employment Standards Contact Centre</Subheading>
          <Paragraph>
            Hours: 8:15 am to 4:30 pm MT (Monday to Friday, closed statutory
            holidays)
          </Paragraph>
          <BasicButton
            onPress={() => Linking.openURL('tel://+18774273731')}
            icon="phone"
            iconColor={colors.primary}
            style={{ marginBottom: 32 }}
          >
            +1-877-427-3731 (Toll-free)
          </BasicButton>
          <Subheading>Workers' Compensation Board</Subheading>
          <Paragraph>Contact the WCB</Paragraph>
          <BasicButton
            onPress={() => {
              WebBrowser.openBrowserAsync('https://www.wcb.ab.ca/ ');
            }}
            icon="web"
            iconColor={colors.primary}
          >
            https://www.wcb.ab.ca/
          </BasicButton>
          <BasicButton
            onPress={() => Linking.openURL('tel://+18669229221')}
            icon="phone"
            iconColor={colors.primary}
            style={{ marginBottom: 32 }}
          >
            +1-866-922-9221 (Toll-free)
          </BasicButton>
        </View>
      </ScrollView>
      <FloatingButton onPress={() => navigation.navigate('Find Your Voice')} />
    </>
  );
};

export default Resources;
