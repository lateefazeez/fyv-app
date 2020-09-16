import React from 'react';
import { View, ScrollView, Linking } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import PageHeader from 'components/PageHeader';
import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import ExternalRefButton from 'components/ExternalRefButton';
import TwinLinkButton from 'components/TwinLinkButton';

import headerImage from 'assets/placeholder.png';

const EmploymentStandards = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <PageHeader source={headerImage} />
      <View style={{ padding: 16 }}>
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
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TwinLinkButton
            onPress={() => Linking.openURL('tel://+18774273731')}
            icon="phone"
            style={{ flex: 1, marginBottom: 32, marginRight: 2 }}
          >
            +1-877-427-3731
          </TwinLinkButton>

          <TwinLinkButton
            icon="web"
            onPress={() =>
              WebBrowser.openBrowserAsync(
                'https://www.alberta.ca/employment-standards.aspx',
              )
            }
            style={{
              flex: 1,
              marginBottom: 32,
              marginLeft: 2,
              paddingRight: 2,
            }}
          >
            Alberta Employment Standards
          </TwinLinkButton>
        </View>

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
      </View>
    </ScrollView>
  );
};

export default EmploymentStandards;
