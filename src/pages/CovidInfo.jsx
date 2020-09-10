import React from 'react';
import { View, ScrollView } from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
import { useNavigation } from '@react-navigation/native';

import FloatingButton from '../components/FindingYourVoiceFloatingButton';
import PageHeader from '../components/PageHeader';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Subheading from '../components/Subheading';

import headerImage from '../../assets/placeholder.png';

const CovidInfo = () => {
  const navigation = useNavigation();

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
        </View>
      </ScrollView>
      <FloatingButton
        onPress={() => navigation.navigate('Finding Your Voice')}
      />
    </>
  );
};

export default CovidInfo;
