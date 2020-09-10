import React from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

<<<<<<< HEAD
=======
import Heading from '../components/Heading';
>>>>>>> f66462e0b886244261b83d309574701b29d8ff1e
import PageHeader from '../components/PageHeader';
import sectionIcon from '../../assets/finding_your_voice_icon.png';
import Paragraph from '../components/Paragraph';
import BasicButton from '../components/BasicButton';
import SectionTitleText from '../components/SectionTitleText';

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
        <BasicButton> Injury Prevention & Training</BasicButton>
        <BasicButton> Racist Incident</BasicButton>
        <BasicButton> Reporting & Filing an Injury</BasicButton>
      </View>
    </ScrollView>
  );
};
export default FindingYourVoice;
