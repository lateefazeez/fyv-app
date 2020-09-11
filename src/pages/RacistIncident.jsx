import React, { useState } from 'react';
import { Linking, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ChatBot from 'react-native-chatbot';

import BasicButton from '../components/BasicButton';

import colors from '../config/colors';

const getUniqueId = () => {
  return ((1 + Math.random()) * 0x10000).toString(16);
};

const RacistIncident = () => {
  const [sessionKey, setSessionKey] = useState(getUniqueId());
  const navigation = useNavigation();

  const handleEnd = () => {
    return Alert.alert(
      'Do you want to try again?',
      'You can start over or go back to app main screen.',
      [
        {
          text: 'Back',
          onPress: () => navigation.navigate('Home'),
          style: 'cancel',
        },
        {
          text: 'Restart',
          onPress: () => {
            setSessionKey(getUniqueId());
          },
        },
      ],
      { cancelable: false },
    );
  };

  const steps = [
    {
      id: '0',
      message: 'Welcome to Find Your Voice chatbot!',
      trigger: '1',
    },
    {
      id: '1',
      message:
        'This is an educational tool. Please, do not make any decision based only on the content provided here.',
      trigger: 'description',
    },
    {
      id: 'description',
      message: 'Here is the scenario description...',
      trigger: 'question1',
    },
    {
      id: 'question1',
      message: 'What would you do?',
      trigger: 'question1_options',
    },
    {
      id: 'question1_options',
      options: [
        { value: 1, label: 'Option 1', trigger: 'Case1' },
        { value: 2, label: 'Option 2', trigger: 'end' },
        { value: 3, label: 'Option 3', trigger: 'end' },
      ],
    },
    {
      id: 'Case1',
      message: 'This is case 1 description...',
      trigger: 'Case1_Question1',
    },
    {
      id: 'Case1_Question1',
      message: 'A big grizzly bear shows up! What will you do?',
      trigger: 'Case1_Question1_Options',
    },
    {
      id: 'Case1_Question1_Options',
      options: [
        { value: 1, label: 'Run!', trigger: 'Case1_Question1_Answer1' },
        { value: 2, label: 'Fight!', trigger: 'Case1_Question1_Answer2' },
        { value: 3, label: 'Quit', trigger: 'end' },
      ],
    },
    {
      id: 'Case1_Question1_Answer1',
      message: 'Are you a coward? Call Alberta Government now:',
      trigger: 'alberta_website',
    },
    {
      id: 'alberta_website',
      component: (
        <BasicButton
          onPress={() => Linking.openURL('tel://+17804869009')}
          icon="phone"
          iconColor={colors.primary}
        >
          Call AWHC (Toll-free)
        </BasicButton>
      ),
      trigger: 'Case1_Question2',
    },
    {
      id: 'Case1_Question1_Answer2',
      message: "That's right! http://alberta.ca",
      trigger: 'end',
    },
    {
      id: 'Case1_Question2',
      message: "But do you think you're brave enough?",
      trigger: 'Case1_Question2_Options',
    },
    {
      id: 'Case1_Question2_Options',
      options: [
        { value: 1, label: 'Of course I am!', trigger: 'end' },
        { value: 2, label: "I'm not so sure...", trigger: 'end' },
        { value: 3, label: 'Quit', trigger: 'end' },
      ],
    },
    {
      id: 'end',
      message: "That's all for now, bye!",
      end: true,
    },
  ];

  return (
    <ChatBot
      key={sessionKey}
      steps={steps}
      userAvatar="https://i.ibb.co/yVfjxZ1/user-icon.png"
      botAvatar="https://i.ibb.co/9Nz0rZb/logo-green-icon.png"
      /* handleEnd={handleEnd} */
      userDelay={200}
      botDelay={1000}
      customDelay={200}
      contentStyle={{
        paddingTop: 8,
        backgroundColor: colors.lightGrey,
      }}
      scrollViewProps={{}}
      customStyle={{
        backgroundColor: 'none',
        borderWidth: 0,
        marginLeft: 43,
      }}
      bubbleStyle={{ backgroundColor: colors.primary }}
      optionElementStyle={{ backgroundColor: colors.darkGrey }}
      footerStyle={{ position: 'absolute', bottom: -100 }}
    />
  );
};

export default RacistIncident;
