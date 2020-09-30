import React from 'react';
import { View, ScrollView } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import PageHeader from 'components/PageHeader';
import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import ResourceCard from 'components/ResourceCard';
import FloatingButtonFYV from 'components/FloatingButtonFYV';
import ExternalRefButton from 'components/ExternalRefButton';
import ContentSlider from 'components/ContentSlider';

import headerImage from 'assets/placeholder.png';

import colors from 'config/colors.json';
import slides from './slides';

const WorkersCompensation = () => {
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
            <Heading>Workers' Compensation Board</Heading>
            <Paragraph>
              If you are injured at work, it is your right to report the injury.
              If this happens to you, follow these steps:
            </Paragraph>
          </View>

          <ContentSlider slides={slides} />

          <View
            style={{
              flex: 1,
              padding: 24,
              paddingBottom: 80,
            }}
          >
            <ExternalRefButton
              icon="format-list-checkbox"
              onPress={async () => {
                await WebBrowser.openBrowserAsync(
                  'https://www.wcb.ab.ca/claims/report-an-injury/for-workers.html',
                );
              }}
              style={{ marginBottom: 24 }}
            >
              File a WCB Report
            </ExternalRefButton>

            <Paragraph>
              It does not matter if you believe the injury was your fault, or if
              your employer tells you it was your fault. WCB is “no-fault”
              insurance that applies to most workplaces.
            </Paragraph>
            <Paragraph>
              Employers have a responsibility to help you with your paperwork.
              However, there are cases where employers do not help or discourage
              workers from filing paperwork. If this is the case, ask a trusted
              co-worker to help you. It is your right to report an injury, and
              reporting an injury is needed to claim any injury benefits.
            </Paragraph>
            <Paragraph>
              Confused? Don’t be afraid to call WCB. If they don’t know the
              answer, they can point you in the right direction.
            </Paragraph>

            <ResourceCard
              title="Workers’ Compensation Board"
              content={{
                description:
                  'The Workers’ Compensation Board Alberta can answer questions related to workplace injuries and benefits.\n\nIMPORTANT: You may also report a workplace injury through WCB.',
                phone: '+1 866-922-9221',
                website: 'https://www.wcb.ab.ca/',
              }}
            />
          </View>
        </View>
      </ScrollView>
      <FloatingButtonFYV />
    </>
  );
};

export default WorkersCompensation;
