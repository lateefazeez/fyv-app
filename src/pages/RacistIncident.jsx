import React, { useState, useEffect } from 'react';
import { Linking, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ChatBot from 'react-native-chatbot';

import BasicButton from '../components/BasicButton';

import colors from '../config/colors';

const getUniqueId = () => {
  const S4 = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };

  const uniqueId = `${
    S4() + S4()
  }-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
  console.log('new Id: ', uniqueId);
  return uniqueId;
};

const RacistIncident = () => {
  const [sessionKey, setSessionKey] = useState(getUniqueId());
  const navigation = useNavigation();

  const handleEnd = ({ renderedSteps, steps, values }) => {
    console.log('steps:\n', steps);
    console.log('values:\n', values);
    console.log('rendered:\n', renderedSteps);
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
        'We can help you with 3 educational scenarios. Which one do you pick?',
      trigger: 'options-1',
    },
    {
      id: 'options-1',
      options: [
        { value: 1, label: 'Scenario 1', trigger: 'Case1' },
        { value: 2, label: 'Scenario 2', trigger: 'end' },
        { value: 3, label: 'Scenario 3', trigger: 'end' },
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
          +1 780-486-9009 (Toll-free)
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
      botAvatar="https://placeimg.com/640/480/tech"
      handleEnd={handleEnd}
      userDelay={0}
      botDelay={750}
      contentStyle={{ paddingTop: 8, backgroundColor: 'none' }}
      scrollViewProps={{}}
      footerStyle={{ height: 0, position: 'absolute', bottom: -60 }}
    />
  );
};

export default RacistIncident;
