import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import ParsedText from 'react-native-parsed-text';

import FloatingButtonFYV from 'components/FloatingButtonFYV';
import Paragraph from 'components/Paragraph';
import PageHeader from 'components/PageHeader';
import Heading from 'components/Heading';
import ResourceCard from 'components/ResourceCard';
import ContentSlider from 'components/ContentSlider';

import headerImage from 'assets/headers/typesofhazards.png';

import { testAlert } from 'utils';

import colors from 'config/colors.json';
import slides from './slides';

const TypesOfHazards = () => {
  const testParagraph =
    'In Alberta, there are 4 [hazards] categories that relate to Alberta workplace health and safety.';
  const highlightedComplaint =
    'The [complaint] can be related to you or another.';

  const renderGlossary = (matchingString, matches) => {
    const pattern = /\[(.*?)\]/i;
    const match = matchingString.match(pattern);
    return `${match[1]}`;
  };

  return (
    <>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: colors.lightGrey,
        }}
      >
        <PageHeader source={headerImage} />

        <View style={{ paddingHorizontal: 24 }}>
          <Heading>Types of Hazards</Heading>
          <ParsedText
            style={{
              color: colors.darkerGrey,
              lineHeight: 24,
              fontSize: 16,
              fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
              marginBottom: 24,
              textAlign: 'justify',
            }}
            parse={[
              {
                pattern: /\[(.*?)\]/i,
                style: { fontWeight: 'bold', color: colors.primary },
                onPress: testAlert,
                renderText: renderGlossary,
              },
            ]}
          >
            {testParagraph}
          </ParsedText>
          <Paragraph>
            Employers must make workplaces safe from these hazards.
          </Paragraph>
        </View>

        <ContentSlider showsButtons slides={slides} />

        <View
          style={{
            paddingHorizontal: 24,
            paddingBottom: 80,
          }}
        >
          <ResourceCard
            title="Ask An Expert"
            content={{
              description:
                'Question about Hazards? Contact Alberta OHS. If they don’t know the answer, they will point you in the right direction.',
              phone: '+18664158690',
              website: 'https://www.alberta.ca/ask-expert.aspx',
            }}
          />

          <Paragraph>
            You can also make an anonymous health and safety complaints to
            Alberta OHS online or by phone.
          </Paragraph>

          <ParsedText
            style={{
              color: colors.darkerGrey,
              lineHeight: 24,
              fontSize: 16,
              fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
              marginBottom: 24,
              textAlign: 'justify',
            }}
            parse={[
              {
                pattern: /\[(.*?)\]/i,
                style: { fontWeight: 'bold', color: colors.primary },
                onPress: testAlert,
                renderText: renderGlossary,
              },
            ]}
          >
            {highlightedComplaint}
          </ParsedText>

          <ResourceCard
            title="Occupational Health & Safety Contact Centre"
            content={{
              description:
                'The Alberta Occupational Health and Safety (AOHS) Contact Centre can answer questions related to workplace hazards. Contact them if you or anyone else are in danger of injury.\n\nIMPORTANT: You may also file an anonymous complaint through AOHS.',
              phone: '+1 866-415-8690',
              website: 'https://www.alberta.ca/occupational-health-safety.aspx',
            }}
          />
        </View>
      </ScrollView>
      <FloatingButtonFYV />
    </>
  );
};

export default TypesOfHazards;
