import React from 'react';
import { Linking, Alert, View, Text } from 'react-native';
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
        'Please provide your answers to the following Educational Scenarios.',
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
        {
          value: 'Yes, I report it.',
          label: 'Yes, I report it.',
          trigger: '8',
        },
        {
          value: "No, I don't report it.",
          label: "No, I don't report it.",
          trigger: '31',
        },
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
        'According to OHS legislation and most workplace policies, you should report it to your direct supervisor.',
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
      message:
        'This is another step you can take, as experiencing this alone can be hard and isolating.',
      trigger: '13',
    },
    {
      id: '13',
      message:
        'Now that you reported the incident, was there an action taken by management afterwards?',
      trigger: '14',
    },
    {
      id: '14',
      options: [
        { value: 'yes', label: 'YES', trigger: '15' },
        { value: 'no', label: 'NO', trigger: '20' },
      ],
    },
    {
      id: '15',
      message: 'Did the result make you feel safer?',
      trigger: '16',
    },
    {
      id: '16',
      options: [
        { value: 'yes', label: 'YES', trigger: '17' },
        { value: 'no', label: 'NO', trigger: '20' },
      ],
    },
    {
      id: '17',
      message: "That's great! ",
      trigger: '18',
    },
    {
      id: '18',
      message:
        'You have completed this section of Injury prevention & Training.',
      trigger: '19',
    },
    {
      id: '19',
      message:
        "Restart this example if you'd like to see the different options available to you, choose another topic, or quit.",
      trigger: 'end',
    },
    {
      id: '20',
      message: 'Sorry to hear about that.',
      trigger: '18',
    },
    {
      id: '21',
      message:
        'Workers may not always feel safe reporting something to their bosses, because they know there will be consequences. ',
      trigger: '19',
    },
    {
      id: '22',
      message:
        "In other cases, unfortunately sometimes workplaces don't do anything about racism.",
      trigger: '18',
    },
    {
      id: '23',
      message:
        'For example, you may report something to your supervisor and your supervisor may just brush it off.',
      trigger: '19',
    },
    {
      id: '24',
      message:
        'There have been cases where racism is reported and nothing changes, or the actions taken are insufficient when you report racism. ',
      trigger: '18',
    },
    {
      id: '25',
      message:
        'For example, Flora works on an assembly line in a meat packing plant which is male dominated. As the only woman of colour there, she has politely brought up numerous racist and mysoginist incidents to Human Resources hoping for change. Although the Human Resources manager listened and promised to look into it, nothing changed and continues to hear the same things at work. She struggles because she needs the job even though it is toxic to her wellbeing.',
      trigger: '26',
    },

    {
      id: '26',
      options: [
        {
          value: 'What should I do if this happens to me?',
          label: 'What should I do if this happens to me?',
          trigger: '27',
        },
      ],
    },
    {
      id: '27',
      message:
        'If you reported it and nothing changes, some last resorts may be making a human rights complaint and a health and safety complaint. ',
      trigger: '28',
    },
    {
      id: '28',
      message:
        ' Human rights and racism relates to someone experiencing discrimination due to ethnocultural background, and OHS and racism relates to someone experiencing psychosocial hazards at work.',
      trigger: '29',
    },
    {
      id: '29',
      message:
        'Great job! You have completed this section of Injury prevention & Training.',
      trigger: '30',
    },
    {
      id: '30',
      message:
        "Restart this example if you'd like to see the different options available to you, choose another topic, or quit.",
      trigger: 'end_options',
    },
    {
      id: '31',
      message:
        "You might be scared you'll get fired for complaining and that could happen. There can be serious consequences for reporting something.",
      trigger: '32',
    },
    {
      id: '32',
      message:
        'If you are unsure what to do, check and see if your company has a respect in the workplace policy, and anti-bullying policy, a discrimination policy, or any policy that relates to racism.',
      trigger: '33',
    },
    {
      id: '33',
      message:
        'You can also ask someone from Human Resources (if your workplace has this department) to learn about workplace policies.',
      trigger: '34',
    },
    {
      id: '34',
      message:
        'Human rights and racism relates to someone experiencing discrimination due to ethnocultural background and relates to someone experiencing psychosocial hazards at work.',
      trigger: '35',
    },
    {
      id: '35',
      message:
        'If you do not feel comfortable reporting this with your supervisor, you may also want to talk to a trusted colleague and not report it. ',
      trigger: '36',
    },
    {
      id: '36',
      message:
        'It may be worth talking to someone in Human Resources if you feel you can trust them.',
      trigger: '37',
    },
    {
      id: '37',
      message:
        'Workers also have the option of making a human rights complaint to the Alberta Human Rights Tribunal and a health and safety complaint to the Government of Alberta.',
      trigger: '38',
    },
    {
      id: '38',
      message:
        'Great job! You have completed this section of Injury prevention & Training.',
      trigger: '39',
    },
    {
      id: '39',
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

export default InjuryPrevention;
