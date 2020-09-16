import React from 'react';
import { Alert, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import InChatCard from '../components/InChatCard';
import FyvChatBot from '../components/ChatBot';
import BasicButton from '../components/BasicButton';
import RacistIncident from './RacistIncident';

const FindYourVoice = () => {
  const navigation = useNavigation();

  const handleEnd = () => {
    return Alert.alert(
      'Do you want to quit?',
      'All the displayed messages are going to be reseted. Are you sure?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
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
      message: 'Welcome to Find Your Voice.',
      trigger: '1',
    },
    {
      id: '1',
      message:
        'The following three examples are based on real life experience of workers.',
      trigger: '2',
    },
    {
      id: '2',
      message: 'These examples are meant to be used for educational purposes.',
      trigger: '3',
    },
    {
      id: '3',

      component: <InChatCard />,
      trigger: 'Injury Prevention Options',
    },
    {
      id: 'Injury Prevention Options',
      options: [
        { value: 'A', label: 'A', trigger: 'injury prevention' },
        { value: 'B', label: 'B', trigger: 'racist incident' },
        { value: 'C', label: 'C', trigger: 'reporting injury' },
      ],
    },
    {
      id: 'injury prevention',
      message: 'Great!',
      trigger: '4',
    },

    {
      id: 'racist incident',
      message: 'Great!',
      trigger: 'begin racist incident',
    },
    {
      id: 'begin racist incident',
      message: "Let's begin.",
      trigger: 'start racist incident',
    },
    {
      id: 'reporting injury',
      message: 'Great!',
      trigger: '4',
    },
    {
      id: '4',
      message:
        'One day, you come into work and when you arrive, your supervisor asks you to do a task you were not trained to do.',
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
        "Workers are protected by OHS legislation. If you are asked to do something you weren't trained to do at work, you do not have to do it immediately and you have a right to receive training and right to know what dangers you may face.",
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
      message: 'Is this clear?',
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
          onPress={() => {
            navigation.navigate('Basic Rights');
          }}
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
      options: [{ value: 'ok', label: 'OK', trigger: '45' }],
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
      options: [{ value: '0', label: 'QUIT', trigger: 'end' }],
    },
    {
      id: 'end',
      message: 'Bye!',
      end: true,
    },
    {
      id: 'start racist incident',
      message:
        'A co-worker has made inappropriate jokes about your religion and this bothers you.',
      trigger: '6',
    },
    {
      id: '5a',
      message: 'Thank you and have a great day',
      trigger: 'end_options',
    },
    {
      id: '6a',
      message: 'Do you report it?',
      trigger: '7a',
    },
    {
      id: '7a',
      options: [
        {
          value: 'Yes, I report it.',
          label: 'Yes, I report it.',
          trigger: '8a',
        },
        {
          value: "No, I don't report it.",
          label: "No, I don't report it.",
          trigger: '31a',
        },
      ],
    },
    {
      id: '8a',
      message:
        'Who do you report to? Who you should report an incident like this to is complicated.',
      trigger: '10a',
    },
    {
      id: '9a',
      message: 'To be added',
      trigger: 'end_options',
    },
    {
      id: '10a',
      message:
        'According to OHS legislation and most workplace policies, you should report it to your direct supervisor.',
      trigger: '11a',
    },
    {
      id: '11a',
      message:
        'However, sometimes you may feel that you need to talk to a colleague for advice, or to share your experience with someone who is going through similar things.',
      trigger: '12a',
    },
    {
      id: '12a',
      message:
        'This is another step you can take, as experiencing this alone can be hard and isolating.',
      trigger: '13a',
    },
    {
      id: '13a',
      message:
        'Now that you reported the incident, was there an action taken by management afterwards?',
      trigger: '14a',
    },
    {
      id: '14a',
      options: [
        { value: 'yes', label: 'YES', trigger: '15a' },
        { value: 'no', label: 'NO', trigger: '20a' },
      ],
    },
    {
      id: '15a',
      message: 'Did the result make you feel safer?',
      trigger: '16',
    },
    {
      id: '16a',
      options: [
        { value: 'yes', label: 'YES', trigger: '17' },
        { value: 'no', label: 'NO', trigger: '20' },
      ],
    },
    {
      id: '17a',
      message: "That's great! ",
      trigger: '18a',
    },
    {
      id: '18a',
      message:
        'You have completed this section of Injury prevention & Training.',
      trigger: '19a',
    },
    {
      id: '19a',
      message:
        "Restart this example if you'd like to see the different options available to you, choose another topic, or quit.",
      trigger: 'end',
    },
    {
      id: '20a',
      message: 'Sorry to hear about that.',
      trigger: '18a',
    },
    {
      id: '21',
      message:
        'Workers may not always feel safe reporting something to their bosses, because they know there will be consequences. ',
      trigger: '19a',
    },
    {
      id: '22a',
      message:
        "In other cases, unfortunately sometimes workplaces don't do anything about racism.",
      trigger: '18a',
    },
    {
      id: '23a',
      message:
        'For example, you may report something to your supervisor and your supervisor may just brush it off.',
      trigger: '19a',
    },
    {
      id: '24a',
      message:
        'There have been cases where racism is reported and nothing changes, or the actions taken are insufficient when you report racism. ',
      trigger: '18a',
    },
    {
      id: '25a',
      message:
        'For example, Flora works on an assembly line in a meat packing plant which is male dominated. As the only woman of colour there, she has politely brought up numerous racist and mysoginist incidents to Human Resources hoping for change. Although the Human Resources manager listened and promised to look into it, nothing changed and continues to hear the same things at work. She struggles because she needs the job even though it is toxic to her wellbeing.',
      trigger: '26a',
    },

    {
      id: '26a',
      options: [
        {
          value: 'What should I do if this happens to me?',
          label: 'What should I do if this happens to me?',
          trigger: '27a',
        },
      ],
    },
    {
      id: '27a',
      message:
        'If you reported it and nothing changes, some last resorts may be making a human rights complaint and a health and safety complaint. ',
      trigger: '28a',
    },
    {
      id: '28a',
      message:
        ' Human rights and racism relates to someone experiencing discrimination due to ethnocultural background, and OHS and racism relates to someone experiencing psychosocial hazards at work.',
      trigger: '29a',
    },
    {
      id: '29a',
      message:
        'Great job! You have completed this section of Injury prevention & Training.',
      trigger: '30a',
    },
    {
      id: '30a',
      message:
        "Restart this example if you'd like to see the different options available to you, choose another topic, or quit.",
      trigger: 'end_options',
    },
    {
      id: '31a',
      message:
        "You might be scared you'll get fired for complaining and that could happen. There can be serious consequences for reporting something.",
      trigger: '32a',
    },
    {
      id: '32a',
      message:
        'If you are unsure what to do, check and see if your company has a respect in the workplace policy, and anti-bullying policy, a discrimination policy, or any policy that relates to racism.',
      trigger: '33a',
    },
    {
      id: '33a',
      message:
        'You can also ask someone from Human Resources (if your workplace has this department) to learn about workplace policies.',
      trigger: '34a',
    },
    {
      id: '34a',
      message:
        'Human rights and racism relates to someone experiencing discrimination due to ethnocultural background and relates to someone experiencing psychosocial hazards at work.',
      trigger: '35a',
    },
    {
      id: '35a',
      message:
        'If you do not feel comfortable reporting this with your supervisor, you may also want to talk to a trusted colleague and not report it. ',
      trigger: '36a',
    },
    {
      id: '36a',
      message:
        'It may be worth talking to someone in Human Resources if you feel you can trust them.',
      trigger: '37a',
    },
    {
      id: '37a',
      message:
        'Workers also have the option of making a human rights complaint to the Alberta Human Rights Tribunal and a health and safety complaint to the Government of Alberta.',
      trigger: 'do you understand',
    },
    {
      id: 'do you understand',
      message: 'Do you understand?',
      trigger: 'checkpoint',
    },
    {
      id: 'checkpoint',
      options: [
        { value: 'yes', label: 'Yes I do', trigger: '38a' },
        { value: 'no', label: "No I don't", trigger: 'repeat racist incident' },
      ],
    },
    {
      id: 'repeat racist incident',
      message: "Okay let's go over this again",
      trigger: 'start racist incident',
    },
    {
      id: '38a',
      message:
        'Great job! You have completed this section of Injury prevention & Training.',
      trigger: '39a',
    },
    {
      id: '39a',
      message:
        "Restart this example if you'd like to see the different options available to you, choose another topic, or quit.",
      trigger: 'end',
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

export default FindYourVoice;
