import React from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Heading from '../components/Heading';

import PageHeader from '../components/PageHeader';
import sectionIcon from '../../assets/finding_your_voice_icon.png';
import Paragraph from '../components/Paragraph';
import BasicButton from '../components/BasicButton';

const FindingYourVoice = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ flex: 1 }}>
      <PageHeader source={sectionIcon} />
      <View style={{ padding: 16 }}>
        <Heading>Finding Your Voice</Heading>
        <Paragraph>
          The following three examples are based on real life experience of
          workers.
        </Paragraph>
        <Paragraph>
          The options and decisions provided will not apply to every situation
          you encounter in the work place, but as you work through them, they
          will show you how knowledge of the correct legislation and protections
          can help you make choices that work best for you.
        </Paragraph>
        <BasicButton
          onPress={() => {
            navigation.navigate('Injury Prevention & Training', {
              screen: 'Injury Prevention & Training',
            });
          }}
        >
          Injury Prevention & Training
        </BasicButton>

        <BasicButton
          onPress={() => {
            navigation.navigate('Racist Incident', {
              screen: 'Racist Incident',
            });
          }}
        >
          Racist Incident
        </BasicButton>

        <BasicButton
          onPress={() => {
            navigation.navigate('Reporting & Filing An Injury', {
              screen: 'Reporting & Filing an Injury',
            });
          }}
        >
          Reporting & Filing an Injury
        </BasicButton>
      </View>
    </ScrollView>
  );
};
export default FindingYourVoice;
