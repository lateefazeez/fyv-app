import React from 'react';
import { View, ScrollView } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import FloatingButtonFYV from 'components/FloatingButtonFYV';
import Paragraph from 'components/Paragraph';
import ExternalRefButton from 'components/ExternalRefButton';
import PageHeader from 'components/PageHeader';
import Heading from 'components/Heading';
import ResourceCard from 'components/ResourceCard';
import ContentSlider from 'components/ContentSlider';

import headerImage from 'assets/hazards.png';

import colors from 'config/colors.json';
import slides from './slides';

const TypesOfHazards = () => {
  return (
    <>
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <PageHeader source={headerImage} />

        <View style={{ backgroundColor: colors.lightGrey }}>
          <View style={{ paddingHorizontal: 24 }}>
            <Heading>Types of Hazards</Heading>
            <Paragraph>
              In Alberta, there are 4 hazards that relate to workplace health
              and safety.
            </Paragraph>
            <Paragraph>
              A common way to indentify hazards is by category:
            </Paragraph>
          </View>

          <ContentSlider slides={slides} />

          <View
            style={{
              paddingHorizontal: 24,
            }}
          >
            <ExternalRefButton
              icon="web"
              onPress={async () => {
                await WebBrowser.openBrowserAsync(
                  'https://www.alberta.ca/workplace-hazards.aspx',
                );
              }}
            >
              Alberta Workplace Hazards
            </ExternalRefButton>

            <Paragraph>
              Employers must make workplaces safe from these hazards.
            </Paragraph>
          </View>

          <View
            style={{
              flex: 1,
              padding: 24,
              paddingBottom: 80,
              backgroundColor: colors.darkerGrey,
            }}
          >
            <Paragraph style={{ color: colors.white }}>
              Question about Hazards? Contact Alberta OHS. If they don’t know
              the answer, they will point you in the right direction.
            </Paragraph>

            <ResourceCard
              title="Ask An Expert"
              content={{
                description: 'Services are free.',
                phone: '+18664158690',
                website: 'https://www.alberta.ca/ask-expert.aspx',
              }}
            />

            <Paragraph style={{ color: colors.white }}>
              You can also make an anonymous health and safety complaints to
              Alberta OHS online or by phone.
            </Paragraph>

            <Paragraph style={{ color: colors.white }}>
              The complaint can be related to you or another.
            </Paragraph>

            <ResourceCard
              title="Occupational Health & Safety Contact Centre"
              content={{
                description:
                  'The Alberta Occupational Health and Safety (AOHS) Contact Centre can answer questions related to workplace hazards. Contact them if you or anyone else are in danger of injury.\n\nIMPORTANT: You may also file an anonymous complaint through AOHS.',
                phone: '+1 866-415-8690',
                website:
                  'https://www.alberta.ca/occupational-health-safety.aspx',
              }}
            />
          </View>
        </View>
      </ScrollView>
      <FloatingButtonFYV />
    </>
  );
};

export default TypesOfHazards;
