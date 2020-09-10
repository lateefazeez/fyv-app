import React from 'react';
import { View, ScrollView } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import PageHeader from '../../components/PageHeader';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import BasicButton from '../../components/BasicButton';

import headerImage from '../../../assets/placeholder.png';
import ExternalRefButton from '../../components/ExternalRefButton';
import LinkButtons from '../../components/LinkButtons';

import colors from '../../config/colors';

const WorkersCompensation = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <PageHeader source={headerImage} />
      <View style={{ padding: 16 }}>
        <Heading>Workers' Compensation Board</Heading>

        <Paragraph>
          If you are injured at work, it is your right to report the injury. If
          this happens to you, follow these steps: 1. Tell your employer 2.
          Apply any First Aid and tell your health care provider 3. Tell the
          Workers’ Compensation Board (you can file a report online by clicking
          the link below or in paper and fax it
        </Paragraph>
        <ExternalRefButton
          icon="format-list-checkbox"
          onPress={() =>
            WebBrowser.openBrowserAsync(
              'https://www.wcb.ab.ca/claims/report-an-injury/for-workers.html',
            )
          }
          style={{ marginBottom: 32 }}
        >
          File a WCB Online Report
        </ExternalRefButton>

        <Paragraph>
          It does not matter if you believe the injury was your fault, or if
          your employer tells you it was your fault. WCB is “no-fault” insurance
          that applies to most workplaces.
        </Paragraph>
        <Paragraph>
          Employers have a responsibility to help you with your paperwork.
          However, there are cases where employers do not help or discourage
          workers from filing paperwork. If this is the case, ask a trusted
          coworker to help you. It is your right to report an injury, and
          reporting an injury is needed to claim any injury benefits.
        </Paragraph>
        <Paragraph>
          Confused? Don’t be afraid to call WCB. If they don’t know the answer,
          they can point you in the right direction.
        </Paragraph>

        <BasicButton
          onPress={() => {
            WebBrowser.openBrowserAsync('https://www.wcb.ab.ca/');
          }}
          icon="web"
          iconColor={colors.primary}
          style={{ marginBottom: 32 }}
        >
          https://www.wcb.ab.ca/
        </BasicButton>
        <BasicButton
          onPress={() => Linking.openURL('tel://+14032648100')}
          icon="phone"
          iconColor={colors.primary}
        >
          +1 866-922-9221 (Toll-Free)
        </BasicButton>
      </View>
    </ScrollView>
  );
};

export default WorkersCompensation;
