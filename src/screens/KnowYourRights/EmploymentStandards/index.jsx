import React from 'react';
import { View, ScrollView, Linking } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import PageHeader from 'components/PageHeader';
import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import ExternalRefButton from 'components/ExternalRefButton';
import ResourceCard from 'components/ResourceCard';

import colors from 'config/colors.json';

import headerImage from 'assets/es.png';

const EmploymentStandards = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.lightGrey,
      }}
    >
      <PageHeader source={headerImage} />
      <View
        style={{
          backgroundColor: colors.lightGrey,
          paddingHorizontal: 24,
          paddingBottom: 80,
        }}
      >
        <Heading>Employment Standards</Heading>

        <Paragraph>
          Workers and employers in Alberta must follow Employment Standards
          rules.
        </Paragraph>
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
        <Paragraph>
          Employment standards can be complicated. If you are confused about
          things like being wrongfully fired, or are not being paid correctly,
          call Alberta Employment Standards to find out more.
        </Paragraph>

        <ResourceCard
          title="Employment Standards Contact Centre"
          content={[
            {
              description:
                'Employment Standards Contact Centre can answer questions related to wages, overtime, vacation pay, hours or form, and termination of employment.\n\nHours: 8:15 am to 4:30 pm MT (Monday to Friday, closed statutory holidays).',
              phone: '+1 877-427-3731',
              website: 'https://www.alberta.ca/employment-standards.aspx',
            },
          ]}
        />

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
        >
          Specific Industries Rules
        </ExternalRefButton>
      </View>
    </ScrollView>
  );
};

export default EmploymentStandards;
