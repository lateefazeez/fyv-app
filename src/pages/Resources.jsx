import React, { useState } from 'react';
import { View, Linking } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import FloatingButton from '../components/FloatingButton';
import PageHeader from '../components/PageHeader';
import Heading from '../components/Heading';
import Subheading from '../components/Subheading';
import Paragraph from '../components/Paragraph';
import BasicButton from '../components/BasicButton';

import headerImage from '../../assets/placeholder.png';
import colors from '../config/colors';

const callAlbertaWHC = () => {
  const url = 'tel://17804869009';
  Linking.openURL(url);
};

const Resources = () => {
  const navigation = useNavigation();
  const [setResult] = useState(null);

  const handlePressWRCButtonAsync = async () => {
    const result = await WebBrowser.openBrowserAsync(
      'https://www.helpwrc.org/',
    );
    setResult(result);
  };
  const handlePressESCButtonAsync = async () => {
    const result = await WebBrowser.openBrowserAsync(
      'https://www.alberta.ca/employment-standards.aspx',
    );
    setResult(result);
  };
  const handlePressWPHButtonAsync = async () => {
    const result = await WebBrowser.openBrowserAsync(
      'https://www.alberta.ca/occupational-health-safety.aspx',
    );
    setResult(result);
  };
  const handlePressFACButtonAsync = async () => {
    const result = await WebBrowser.openBrowserAsync(
      'https://www.alberta.ca/file-complaint-online.aspx',
    );
    setResult(result);
  };
  const handlePressWCBButtonAsync = async () => {
    const result = await WebBrowser.openBrowserAsync('https://www.wcb.ab.ca/');
    setResult(result);
  };

  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <PageHeader source={headerImage} />
        <View style={{ padding: 16 }}>
          <Heading>Resources</Heading>

          {/* <Paragraph>
            The Alberta Worker’s Health Centre and Calgary Workers Resource
            Centre provide free help for people who have issues with health and
            safety and worker rights:
          </Paragraph> */}

          <View
            style={{
              flex: 1,
              backgroundColor: colors.effectOne,
              padding: 16,
              borderRadius: 16,
              marginBottom: 16,
            }}
          >
            <Subheading style={{ color: colors.white }}>
              Alberta Workers Health Centre
            </Subheading>

            <Paragraph style={{ color: colors.white }}>
              Services are free. They provide a first point of contact for
              workers with occupational health and safety issues in their
              workplace. They will provide support, public legal education, and
              referrals.
            </Paragraph>

            <BasicButton
              onPress={callAlbertaWHC}
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
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: colors.effectTwo,
              padding: 16,
              borderRadius: 16,
              marginBottom: 16,
            }}
          >
            <Subheading>Calgary Workers Resource Centre</Subheading>

            <Paragraph>
              They provide free case work and a public legal education program
              if you are having issues understanding your rights in your
              workplace.
            </Paragraph>

            <BasicButton
              onPress={() => Linking.openURL('tel://+14032648100')}
              icon="phone"
              iconColor={colors.primary}
              style={{ marginBottom: 8 }}
            >
              +1 403-264-8100 (Toll-free)
            </BasicButton>
            <BasicButton
              onPress={handlePressWRCButtonAsync}
              icon="web"
              iconColor={colors.primary}
              style={{ marginBottom: 32 }}
            >
              https://www.helpwrc.org/
            </BasicButton>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: colors.effectThree,
              padding: 16,
              borderRadius: 16,
              marginBottom: 16,
            }}
          >
            <Subheading style={{ color: colors.white }}>
              Employment Standards Contact Centre
            </Subheading>
            <Paragraph style={{ color: colors.white }}>
              Calling is free. Employment Standards can answer questions related
              to wages, overtime, vacation pay, hours or form, and termination
              of employment.
            </Paragraph>
            <Paragraph style={{ color: colors.white }}>
              Hours: 8:15 am to 4:30 pm MT (Monday to Friday, closed statutory
              holidays).
            </Paragraph>
            <BasicButton
              onPress={() => Linking.openURL('tel://+18774273731')}
              icon="phone"
              iconColor={colors.primary}
              style={{ marginBottom: 8 }}
            >
              +1-877-427-3731 (Toll-free)
            </BasicButton>
            <BasicButton
              onPress={handlePressESCButtonAsync}
              icon="web"
              iconColor={colors.primary}
            >
              https://www.alberta.ca/emp...
            </BasicButton>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: colors.effectFour,
              padding: 16,
              borderRadius: 16,
              marginBottom: 16,
            }}
          >
            <Subheading style={{ color: colors.white }}>
              Alberta Occupational Health and Safety
            </Subheading>
            <Paragraph style={{ color: colors.white }}>
              Alberta Occupational Health and Safety can answer questions
              related to workplace hazards. Contact them if you or anyone else
              are in danger of injury. You may also file an anonymous complaint
              online or by phone through OHS.
            </Paragraph>
            <BasicButton
              onPress={handlePressWPHButtonAsync}
              icon="web"
              iconColor={colors.primary}
            >
              https://www.alberta.ca/occu...
            </BasicButton>
            <BasicButton
              onPress={() => Linking.openURL('tel://+18664158690')}
              icon="phone"
              iconColor={colors.primary}
              style={{ marginBottom: 32 }}
            >
              +1-866-415-8690 (Toll-free)
            </BasicButton>
            <Paragraph style={{ color: colors.white }}>
              File a complaint,
            </Paragraph>
            <BasicButton
              onPress={handlePressFACButtonAsync}
              icon="web"
              iconColor={colors.primary}
            >
              https://wwww.alberta.ca/...
            </BasicButton>
            <BasicButton
              onPress={() => Linking.openURL('tel://+18664158690')}
              icon="phone"
              iconColor={colors.primary}
              style={{ marginBottom: 32 }}
            >
              +1-866-415-8690 (Toll-free)
            </BasicButton>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: colors.effectFive,
              padding: 16,
              borderRadius: 16,
              marginBottom: 16,
            }}
          >
            <Subheading style={{ color: colors.white }}>
              Workers' Compensation Board (WCB)
            </Subheading>
            <Paragraph style={{ color: colors.white }}>
              The Alberta Workers’ Compensation Board can answer questions
              related to workplace injuries and benefits. You may also report a
              workplace injury through WCB
            </Paragraph>
            <BasicButton
              onPress={handlePressWCBButtonAsync}
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
        </View>
      </ScrollView>
      <FloatingButton onPress={() => navigation.navigate('Find Your Voice')} />
    </>
  );
};

export default Resources;
