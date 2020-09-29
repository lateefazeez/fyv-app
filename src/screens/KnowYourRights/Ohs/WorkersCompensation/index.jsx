import React from 'react';
import { View, ScrollView, Linking } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import PageHeader from 'components/PageHeader';
import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import BasicButton from 'components/BasicButton';
import ResourceCard from 'components/ResourceCard';
import FloatingButtonFYV from 'components/FloatingButtonFYV';

import headerImage from 'assets/placeholder.png';
import ExternalRefButton from 'components/ExternalRefButton';

import colors from 'config/colors.json';

const WorkersCompensation = () => {
  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <PageHeader source={headerImage} />
        <View style={{ paddingHorizontal: 24, paddingBottom:80 }}>
          <Heading>Workers' Compensation Board</Heading>

          <Paragraph>
            If you are injured at work, it is your right to report the injury.
            If this happens to you, follow these steps:
          </Paragraph>
          <Paragraph>1. Tell your employer</Paragraph>
          <Paragraph>
            2. Apply any First Aid and tell your health care provider
          </Paragraph>
          <Paragraph>
            3. Tell the Workers’ Compensation Board (you can file a report
            online by clicking the link below or in paper and fax it).
          </Paragraph>

          <ExternalRefButton
            icon="format-list-checkbox"
            onPress={async () =>
              await WebBrowser.openBrowserAsync(
                'https://www.wcb.ab.ca/claims/report-an-injury/for-workers.html',
              )
            }
            style={ { marginBottom: 24 } }
          >
            File a WCB Report
          </ExternalRefButton>

          <Paragraph>
            It does not matter if you believe the injury was your fault, or if
            your employer tells you it was your fault. WCB is “no-fault”
            insurance that applies to most workplaces.
          </Paragraph>
          <Paragraph>
            In the case of injury, employers need to file their own report to
            WCB. Employers also have a responsibility to help you with your
            paperwork. However, there are cases where employers do not help or
            discourage workers from filing paperwork. If this is the case, ask a
            trusted coworker to help you. It is your right to report an injury,
            and reporting an injury is needed to claim any injury benefits.
          </Paragraph>
          <Paragraph>
            Confused? Don’t be afraid to call WCB. If they don’t know the
            answer, they can point you in the right direction.
          </Paragraph>

          <ResourceCard
            title="Workers’ Compensation Board"
            content={[
              {
                description: 'Services are free.',
                phone: '+1 866-922-9221',
                website: 'https://www.wcb.ab.ca/',
              },
            ]}
          />
        </View>
      </ScrollView>
      <FloatingButtonFYV />
    </>
  );
};

export default WorkersCompensation;
