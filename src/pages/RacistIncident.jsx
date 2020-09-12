import React from 'react';
import { Linking, Alert, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FyvChatBot from '../components/ChatBot';
import BasicButton from '../components/BasicButton';

const InjuryPrevention = () => {
  const navigation = useNavigation();

  const handleEnd = () => {
    return Alert.alert(
      'Do you want to quit?',
      'All the displayed messages are going to be reseted. Are you sure?',
      [
        {
          text: 'Cancel',
          onPress: () => { },
          style: 'cancel',
        },
        {
          text: 'Yes, quit',
          onPress: () => {
            navigation.goBack();
          },
        },
      ],
      { cancelable: false },
    );
  };

  const steps = [
    {
      id: '0',
      message: 'Welcome to Finding Your Voice',
      trigger: '1',
    },
    {
      id: '1',
      message:
        'Please provide your answers to the following Educational Scenarios',
      trigger: '2',
    },
    {
      id: '2',
      message: 'Are you ready to begin?',
      trigger: '3',
    },
    {
      id: '3',
      options: [
        { value: 'yes', label: 'YES', trigger: '4' },
        { value: 'no', label: 'NO', trigger: '5' },
      ],
    },
    {
      id: '4',
      message:
        'A co-worker has made inappropriate jokes about your religion and this bothers you.',
      trigger: '6',
    },
    {
      id: '5',
      message: 'Thank you and have a great day',
      trigger: 'end_options',
    },
    {
      id: '6',
      message: 'Do you report it?',
      trigger: '7',
    },
    {
      id: '7',
      options: [
        { value: 'Yes, I report it.', label: 'Yes, I report it.', trigger: '8' },
        { value: 'No, I don\'t report it.', label: 'No, I don\'t report it.', trigger: '9' },
      ],
    },
    {
      id: '8',
      message:
        'Who do you report to? Who you should report an incident like this to is complicated.',
      trigger: '10',
    },
    {
      id: '9',
      message: 'To be added',
      trigger: 'end_options',
    },
    {
      id: '10',
      message:
        "According to OHS legislation and most workplace policies, you should report it to your direct supervisor.",
      trigger: '11',
    },
    {
      id: '11',
      message:
        'However, sometimes you may feel that you need to talk to a colleague for advice, or to share your experience with someone who is going through similar things.',
      trigger: '12',
    },
    {
      id: '12',
      message: 'This is another step you can take, as experiencing this alone can be hard and isolating.',
      trigger: '13',
    },
    {
      id: '13',
      options: [
        { value: 'Got it', label: 'Got it', trigger: '14' },
      ],
    },
    {
      id: '14',
      message: 'Now that you reported the incident, was there an action taken by management afterwards?',
      trigger: 'end_options',
    },

    {
      id: 'end_options',
      options: [{ value: '0', label: 'QUIT', trigger: 'end' }],
    },
    {
      id: 'end',
      message: 'Bye!',
      end: true,
    },
  ];

  return <FyvChatBot steps={steps} handleEnd={handleEnd} />;
};

export default InjuryPrevention;
