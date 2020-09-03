/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader';
import SectionTitleText from '../../components/SectionTitleText';
import SectionDetailsText from '../../components/SectionDetailsText';
import ExternalRefButton from '../../components/ExternalRefButton';

import headerImage from '../../../assets/placeholder.png';

const HumanRights = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <PageHeader source={headerImage} />
      <View style={{ padding: 16 }}>
        <SectionTitleText>Human Rights</SectionTitleText>

        <SectionDetailsText>
          In addition to workplace safety, hazards, rights, and standards,
          Alberta has legislation that relates to the rights of all people,
          regardless of background such as ethnocultural group, source of
          income, participation in a labour union, gender, age, sexual
          orientation, or immigration status:
        </SectionDetailsText>

        <ExternalRefButton icon="file-download" style={{ marginBottom: 32 }}>
          Alberta Human Rights
        </ExternalRefButton>

        <SectionDetailsText>
          Human Rights in Alberta relate to the idea that everyone should be
          free from discrimination, and apply to employers and workers. In cases
          of human rights violations specific steps need to be taken.
        </SectionDetailsText>

        <ExternalRefButton icon="file-download" style={{ marginBottom: 32 }}>
          Complainants Guide
        </ExternalRefButton>
      </View>
    </ScrollView>
  );
};

export default HumanRights;
