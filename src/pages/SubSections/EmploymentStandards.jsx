import React from 'react';
import { View, ScrollView, Linking } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

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
        <Paragraph>
          Employment standards can be complicated. If you are confused about
          things like being wrongfully fired, or issues vacation time, call
          Alberta Employment Standards to find out more. If they don’t know the
          answer, they will point you in the right direction.
        </Paragraph>

        <ExternalRefButton
          icon="web"
          onPress={() =>
            WebBrowser.openBrowserAsync(
              'https://www.alberta.ca/employment-standards.aspx',
            )
          }
          style={{ marginBottom: 32 }}
        >
          Alberta Standards
        </ExternalRefButton>

        <Paragraph>
          Employment Standards apply to most workers. People who work in some
          fields such as live-in workers, truckers, farm workers, and
          firefighters have their own set of rules.
        </Paragraph>

        <ExternalRefButton
          icon="web"
          onPress={() =>
            WebBrowser.openBrowserAsync(
              'https://www.alberta.ca/exceptions-for-specific-industries.aspx',
            )
          }
          style={{ marginBottom: 32 }}
        >
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
        <ExternalRefButton
          onPress={() => Linking.openURL('tel://+18774273731')}
          icon="phone"
          style={{ marginBottom: 32 }}
        >
          +1-877-427-3731
        </ExternalRefButton>
      </View>
    </ScrollView>
  );
};

export default EmploymentStandards;
