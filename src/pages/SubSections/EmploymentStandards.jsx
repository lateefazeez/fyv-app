import React from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import ExternalRefButton from '../../components/ExternalRefButton';

import headerImage from '../../../assets/placeholder.png';

const EmploymentStandards = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <PageHeader source={headerImage} />
      <View style={{ padding: 16 }}>
        <Heading>Employment Standards</Heading>

        <Paragraph>
          Workers and employers in Alberta must follow the Employment Standards
          Code and Employment Standards Regulation.
        </Paragraph>

        <ExternalRefButton icon="web" style={{ marginBottom: 32 }}>
          Alberta Standards
        </ExternalRefButton>

        <Paragraph>
          Employment Standards apply to most workers. People who work in some
          fields such as live-in workers, truckers, farm workers, and
          firefighters have their own set of rules.
        </Paragraph>

        <ExternalRefButton icon="web" style={{ marginBottom: 32 }}>
          Specific Industries Rules
        </ExternalRefButton>

        <Paragraph>
          The Employment Standards Code creates Alberta’s minimum standards of
          employment in areas outside of health and safety that are related to
          the workplace. These include wages, hours of work, overtime, vacation
          and holidays, leaves, and termination of employment.
        </Paragraph>
        <Paragraph>
          It also establishes the steps to follow in cases where employment
          standards have not been met, such as wrongful termination of
          employment.
        </Paragraph>
      </View>
    </ScrollView>
  );
};

export default EmploymentStandards;
