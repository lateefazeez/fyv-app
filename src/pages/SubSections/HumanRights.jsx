import React from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import ExternalRefButton from '../../components/ExternalRefButton';

import headerImage from '../../../assets/placeholder.png';

const HumanRights = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <PageHeader source={headerImage} />
      <View style={{ padding: 16 }}>
        <Heading>Human Rights</Heading>

        <Paragraph>
          In addition to workplace safety, hazards, rights, and standards,
          Alberta has legislation that relates to the rights of all people,
          regardless of background such as ethnocultural group, source of
          income, participation in a labour union, gender, age, sexual
          orientation, or immigration status:
        </Paragraph>

        <ExternalRefButton icon="file-download" style={{ marginBottom: 32 }}>
          Alberta Human Rights
        </ExternalRefButton>

        <Paragraph>
          Human Rights in Alberta relate to the idea that everyone should be
          free from discrimination, and applies to employers and workers. In
          cases of human rights violations specific steps need to be taken.
        </Paragraph>

        <ExternalRefButton icon="file-download" style={{ marginBottom: 32 }}>
          Complainants Guide
        </ExternalRefButton>
      </View>
    </ScrollView>
  );
};

export default HumanRights;
