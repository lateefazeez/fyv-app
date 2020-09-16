import React from 'react';
import { Alert, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FyvChatBot from 'components/ChatBot';
import BasicButton from 'components/BasicButton';

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
        'One day, you come into work and when you arrive,  your supervisor asks you to do a task you were not trained to do.',
      trigger: '6',
    },
    {
      id: '5',
      message: 'Thank you and have a great day',
      trigger: 'end_options',
    },
    {
      id: '6',
      message: 'Do you do it?',
      trigger: '7',
    },
    {
      id: '7',
      options: [
        { value: 'yes', label: 'YES', trigger: '8' },
        { value: 'no', label: 'NO', trigger: '9' },
      ],
    },
    {
      id: '8',
      message:
        'According to the Government of Alberta, workers have the right to know about the dangers of our jobs and how we are protected.',
      trigger: '10',
    },
    {
      id: '9',
      message: 'You should ask for additional information.',
      trigger: '15',
    },
    {
      id: '10',
      message:
        "Workers are protected by this OHS legislation. If you are asked to do something you weren't trained to do at work, you do not have to do it immediately and you have a right to receive training and right to know what dangers you may face.",
      trigger: '11',
    },
    {
      id: '11',
      message:
        'For example, if you are handed a bottle of cleaner with no label on it, you have a right to ask what is in it, what hazards are associated with it and how you can protect yourself from the hazards. ',
      trigger: '12',
    },
    {
      id: '12',
      message: 'Are you cleared with this?',
      trigger: '13',
    },
    {
      id: '13',
      options: [
        { value: 'yes', label: 'YES', trigger: '5' },
        { value: 'no', label: 'NO', trigger: '14' },
      ],
    },
    {
      id: '14',
      message:
        'Please read more about Basic Rights by clicking the button below',
      trigger: 'read more',
    },
    {
      id: 'read more',
      component: (
        <BasicButton
          onPress={ () => {
            navigation.navigate( 'Basic Rights' );
          } }
        >
          Basic Rights
        </BasicButton>
      ),
      trigger: 'end_options',
    },
    {
      id: '15',
      message: 'Do you feel safe and/or comfortable asking?',
      trigger: '16',
    },
    {
      id: '16',
      options: [
        { value: 'yes', label: 'YES', trigger: '17' },
        { value: 'no', label: 'NO', trigger: '18' },
      ],
    },
    {
      id: '17',
      message: "That's great!",
      trigger: '19',
    },
    {
      id: '18',
      message:
        'You have the right to refuse unsafe work - ask for information or actions to be taken.',
      trigger: '35',
    },
    {
      id: '19',
      message:
        'Information is one of the best tools workers can have, as it helps you maneuver the complicated world of the workplace and health and safety legislation. ',
      trigger: '20',
    },
    {
      id: '20',
      message: 'Information can also be overwhelming and/or confusing. ',
      trigger: '21',
    },
    {
      id: '21',
      message:
        "For example, many newcomers who start a new job are assumed to understand their training even when it is too quick or too much. Let's look at another example:",
      trigger: '22',
    },
    {
      id: '22',
      message:
        'Ana, a new worker at Home Depot was given 6 hours to read a large training packet in English. Afterwards, she was asked a few questions and passed a test. However, given the amount of information she read she forgot most of it in a few days and there were no training follow-ups and refreshers. ',
      trigger: '23',
    },
    {
      id: '23',
      message: 'Are you following?',
      trigger: '24',
    },
    {
      id: '24',
      options: [
        { value: 'yes', label: 'YES', trigger: '25' },
        { value: 'no', label: 'NO', trigger: '26' },
      ],
    },
    {
      id: '25',
      message: 'great',
      trigger: '27',
    },
    {
      id: '26',
      message: 'Please scroll up and read these examples again',
      trigger: '23',
    },
    {
      id: '27',
      message: 'Information can come from a variety of sources. ',
      trigger: '28',
    },
    {
      id: '28',
      message:
        'For example, you can get it during training and from your boss. ',
      trigger: '29',
    },
    {
      id: '29',
      message:
        'One of the best sources of information can be from trusted colleagues. These can be people you trust, that have your safety in mind, and share your native language. ',
      trigger: '30',
    },
    {
      id: '30',
      message:
        'For example, workers often go during their lunch break to their native language speaker colleagues to learn more about work matters related to safety and clarify confusing matters.  ',
      trigger: '31',
    },
    {
      id: '31',
      message: 'Are you clear on these informations so far?',
      trigger: '32',
    },
    {
      id: '32',
      options: [
        { value: 'yes', label: 'YES', trigger: '33' },
        { value: 'no', label: 'NO', trigger: '34' },
      ],
    },
    {
      id: '33',
      message: 'Awesome! Thanks and do have a great day',
      trigger: 'end_options',
    },
    {
      id: '34',
      message:
        'Please feel free to start this scenario again! It is important you understand.',
      trigger: 'end_options',
    },
    {
      id: '35',
      message:
        'Sometimes, it is not as simple as saying "No" to something you don\'t think is safe. Refusing to work can be scary and can lead to consequences such as reprisals. ',
      trigger: '36',
    },
    {
      id: '36',
      message:
        'Reprisals can be in the form of immediate firings, less shifts, anger towards you, and manipulation.',
      trigger: '37',
    },
    {
      id: '37',
      message:
        'However, all workers should feel safe when expressing their lack of training or lack of safety. ',
      trigger: '38',
    },
    {
      id: '38',
      message:
        'According to Alberta OHS legislation, you have the right to refuse unsafe work (Right #3).',
      trigger: '39',
    },
    {
      id: '39',
      message: 'This right is: ',
      trigger: '40',
    },
    {
      id: '40',
      component: (
        <View>
          <Text>
            III. Right to refuse work we feel may be dangerous to ourselves or
            others.
          </Text>
        </View>
      ),
      trigger: '41',
    },
    {
      id: '41',
      message:
        'Unsafe work has to do with 4 hazards outlined in OHS legislation. These are physical hazards, chemical hazards, biological hazards, and psychosocial hazards.',
      trigger: '42',
    },
    {
      id: '42',
      message:
        'However, if you refuse unsafe work, this right has specific steps to be taken.',
      trigger: '43',
    },
    {
      id: '43',
      message: 'Please click "OK" to see these steps',
      trigger: '44',
    },
    {
      id: '44',
      options: [ { value: 'ok', label: 'OK', trigger: '45' } ],
    },
    {
      id: '45',
      message: 'The steps you need to take as part of this right are: ',
      trigger: '46',
    },
    {
      id: '46',
      message:
        '1. Let your immediate supervisor know that you are uncomfortable and/or unsafe, and clearly explain why. ',
      trigger: '47',
    },
    {
      id: '47',
      message:
        '2. Give your employer/supervisor a chance and a reasonable timeline to provide you with training, and/or make the work safe.',
      trigger: '48',
    },
    {
      id: '48',
      message:
        '3. If you still do not know what to do and/or If the work is still unsafe, you have the right to refuse the work without reprisal (consequences). ',
      trigger: 'end_options',
    },

    {
      id: 'end_options',
      options: [ { value: '0', label: 'QUIT', trigger: 'end' } ],
    },
    {
      id: 'end',
      message: 'Bye!',
      end: true,
    },
  ];

  return <FyvChatBot steps={ steps } handleEnd={ handleEnd } />;
};

export default InjuryPrevention;
