import React from 'react';
import { View, ScrollView } from 'react-native';
<<<<<<< HEAD
import { useNavigation } from '@react-navigation/native';

=======

import SectionTitleText from '../components/SectionTitleText';
>>>>>>> 3bddd47ce3ef3c18fc1e41ee5c585c51607e548a
import PageHeader from '../components/PageHeader';
import sectionIcon from '../../assets/finding_your_voice_icon.png';
import SectionDetailsText from '../components/SectionDetailsText';
import BasicButton from '../components/BasicButton';
<<<<<<< HEAD
import SectionTitleText from '../components/SectionTitleText';
=======
>>>>>>> 3bddd47ce3ef3c18fc1e41ee5c585c51607e548a

const FindingYourVoice = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ flex: 1 }}>
      <PageHeader source={sectionIcon} />
      <View style={{ padding: 16 }}>
        <SectionTitleText>Finding Your Voice</SectionTitleText>
<<<<<<< HEAD

        <SectionDetailsText>
          The following three examples are based on real life experience of
          worker's. The options and decisions provided will not apply to every
          situation you encounter in the work place, but as you work through
          them, they will show you how knowledge of the correct legislation and
          protections can help you make choices that work best for you.{' '}
        </SectionDetailsText>

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
=======
        <SectionDetailsText>
          The following three examples are based on real life experience of
          workers.
        </SectionDetailsText>
        <SectionDetailsText>
          The options and decisions provided will not apply to every situation
          you encounter in the work place, but as you work through them, they
          will show you how knowledge of the correct legislation and protections
          can help you make choices that work best for you.
        </SectionDetailsText>
        <BasicButton> Injury Prevention & Training</BasicButton>
        <BasicButton> Racist Incident</BasicButton>
        <BasicButton> Reporting & Filing an Injury</BasicButton>
>>>>>>> 3bddd47ce3ef3c18fc1e41ee5c585c51607e548a
      </View>
    </ScrollView>
  );
};
export default FindingYourVoice;
