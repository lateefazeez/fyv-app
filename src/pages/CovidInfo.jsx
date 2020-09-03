/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ScrollView } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import Unorderedlist from 'react-native-unordered-list';

import PageHeader from '../components/PageHeader';
import SectionTitleText from '../components/SectionTitleText';
import SectionDetailsText from '../components/SectionDetailsText';
import SectionSubtitleText from '../components/SectionSubtitleText';

import headerImage from '../../assets/placeholder.png';

const CovidInfo = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <PageHeader source={headerImage} />
      <View style={{ padding: 16 }}>
        <SectionTitleText>COVID-19 Information</SectionTitleText>

        <SectionDetailsText>
          Due to COVID-19, there is a pandemic in Canada that can affect
          workers safety.
          {'\n'}
          {'\n'}
          As a workplace hazard, it is called a biological hazard. Although
          employers must make work safe for workers during this time, many
          workers, such as health care aides, are at more risk because of
          workplace contact and poor safety rules.
        </SectionDetailsText>

        <SectionSubtitleText>
          What if I test positive for COVID-19?
        </SectionSubtitleText>

        <Unorderedlist>
          <SectionDetailsText style={{ marginBottom: 8 }}>
            If you have COVID-19, you should tell your manager.
          </SectionDetailsText>
        </Unorderedlist>

        <Unorderedlist>
          <SectionDetailsText style={{ marginBottom: 8 }}>
            You should also stay home and follow the advice of Alberta Health
            Services by calling 811.
          </SectionDetailsText>
        </Unorderedlist>

        <Unorderedlist>
          <SectionDetailsText style={{ marginBottom: 8 }}>
            You must also isolate for 14 days.
          </SectionDetailsText>
        </Unorderedlist>

        <Unorderedlist>
          <SectionDetailsText style={{ marginBottom: 8 }}>
            Depending on your work, you might get paid leave during this time.
          </SectionDetailsText>
        </Unorderedlist>

        <Unorderedlist>
          <SectionDetailsText style={{ marginBottom: 8, fontWeight: 'bold' }}>
            You cannot lose your job because of COVID-19.
          </SectionDetailsText>
        </Unorderedlist>
      </View>
    </ScrollView>
  );
};

export default CovidInfo;
