import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';

import FloatingButton from '../components/FloatingButton';
import PageHeader from '../components/PageHeader';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Subheading from '../components/Subheading';

import headerImage from '../../assets/placeholder.png';
import ExternalRefButton from '../components/ExternalRefButton';
import LinkButtons from '../components/LinkButtons';

const CovidInfo = () => {
  const navigation = useNavigation();
  const [setResult] = useState(null);

  const handlePressCovidButtonAsync = async () => {
    const result = await WebBrowser.openBrowserAsync(
      'https://www.canada.ca/en/government/publicservice/covid-19/rights-responsibilities.html',
    );
    setResult(result);
  };
  const handlePressCovidLeaveButtonAsync = async () => {
    const result = await WebBrowser.openBrowserAsync(
      'https://www.alberta.ca/covid-19-leave.aspx',
    );
    setResult(result);
  };
  const handlePressCovidFactSheetButtonAsync = async () => {
    const result = await WebBrowser.openBrowserAsync(
      'https://www.wcb.ab.ca/assets/pdfs/workers/WFS_COVID-19.pdf',
    );
    setResult(result);
  };

  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <PageHeader source={headerImage} />
        <View style={{ padding: 16 }}>
          <Heading>COVID-19 Information</Heading>

          <Paragraph>
            Due to COVID-19, there is a pandemic in Canada that can affect
            workers' safety.
            {'\n'}
            {'\n'}
            As a workplace hazard, it is called a biological hazard. Although
            employers must make work safe for workers during this time, many
            workers, such as health care aides, are at more risk because of
            workplace contact and poor safety rules.
          </Paragraph>
          <ExternalRefButton
            icon="link-variant"
            onPress={handlePressCovidButtonAsync}
            style={{ marginBottom: 32, width: '40%' }}
          >
            Read More
          </ExternalRefButton>

          <Subheading>What if I test positive for COVID-19?</Subheading>

          <Unorderedlist>
            <Paragraph style={{ marginBottom: 8 }}>
              If you have COVID-19, you should tell your manager.
            </Paragraph>
          </Unorderedlist>

          <Unorderedlist>
            <Paragraph style={{ marginBottom: 8 }}>
              You should also stay home and follow the advice of Alberta Health
              Services by calling 811.
            </Paragraph>
          </Unorderedlist>

          <Unorderedlist>
            <Paragraph style={{ marginBottom: 8 }}>
              You must also isolate for 14 days.
            </Paragraph>
          </Unorderedlist>

          <Unorderedlist>
            <Paragraph style={{ marginBottom: 8 }}>
              Depending on your work, you might get paid leave during this time.
            </Paragraph>
          </Unorderedlist>

          <Unorderedlist>
            <Paragraph style={{ marginBottom: 8, fontWeight: 'bold' }}>
              You cannot lose your job because of COVID-19.
            </Paragraph>
          </Unorderedlist>
          <Paragraph style={{ marginTop: 20 }}>
            If you are exposed to COVID-19 while at work, please refer this fact
            sheet.
          </Paragraph>
          <ExternalRefButton
            icon="link-variant"
            onPress={handlePressCovidFactSheetButtonAsync}
            style={{ marginBottom: 32, width: '70%' }}
          >
            COVID-19 Fact Sheet
          </ExternalRefButton>
          <Paragraph style={{ marginTop: 20 }}>
            More information on COVID-19 leave in Alberta and pay can be found
            below.
          </Paragraph>
          <ExternalRefButton
            icon="link-variant"
            onPress={handlePressCovidLeaveButtonAsync}
            style={{ marginBottom: 32, width: '70%' }}
          >
            COVID-19 Leave in Alberta
          </ExternalRefButton>
        </View>
      </ScrollView>
      <FloatingButton onPress={() => navigation.navigate('Find Your Voice')} />
    </>
  );
};

export default CovidInfo;
