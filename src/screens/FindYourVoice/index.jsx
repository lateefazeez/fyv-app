import React from 'react';
import { Alert, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import { Card } from 'react-native-paper';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import InChatCard from 'components/InChatCard';
import FyvChatBot from 'components/ChatBot';
import BasicButton from 'components/BasicButton';
import EndChatReportingCard from 'components/EndChatReportingCard';
import EndChatInjuryCard from 'components/EndChatInjuryCard';
import EndChatRacistCard from 'components/EndChatRacistCard';
import InChatRefButton from 'components/InChatRefButton';
import {
  InChatRightsSlide01,
  InChatRightsSlide02,
  InChatRightsSlide03,
} from './slides';

import colors from 'config/colors.json';

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
      trigger: '4b',
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
      trigger: '49',
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
      trigger: 'learn more - right to know',
    },
    {
      id: 'learn more - right to know',
      component: (
        <InChatRefButton
          onPress={() =>
            WebBrowser.openBrowserAsync(
              'https://workershealthcentre.ca/4-health-and-safety-rights/',
            )
          }
          icon="web"
          style={{ marginBottom: 16 }}
        >
          Learn More
        </InChatRefButton>
      ),
      trigger: '10',
    },
    {
      id: '9',
      message: 'You should ask your supervisor for additional information.',
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
        { value: 'yes', label: 'YES', trigger: 'end injury prevention' },
        { value: 'no', label: 'NO', trigger: '14' },
      ],
    },
    {
      id: 'end injury prevention',
      message:
        'Great job! You have completed this section of Injury prevention & Training.',
      trigger: '49',
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
      trigger: '49',
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
      trigger: 'information sources',
    },
    {
      id: 'information sources',
      options: [
        {
          value: 'What are some sources?',
          label: 'What are some sources?',
          trigger: '28',
        },
      ],
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
        { value: 'yes', label: 'YES', trigger: 'end injury prevention' },
        { value: 'no', label: 'NO', trigger: '34' },
      ],
    },
    {
      id: '33',
      message: 'Awesome! Thanks and do have a great day',
      trigger: '49',
    },
    {
      id: '34',
      message:
        'Please feel free to start this scenario again! It is important you understand.',
      trigger: '49',
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
      component: (
        <Card style={{ flex: 1, borderRadius: 17, width: '95%' }}>
          <View style={{ flex: 1 }}>
            <View style={{ padding: 14 }}>
              <Text style={{ fontSize: 13, lineHeight: 17 }}>
                According to Alberta OHS legislation, you have the right to
                refuse unsafe work (Right #3).
              </Text>
            </View>
            <View
              style={{
                padding: 10,
                alignItems: 'center',
                borderTopWidth: 1,
                borderTopColor: colors.primary,
              }}
            >
              <Text
                style={{ fontSize: 13, lineHeight: 17, color: colors.primary }}
              >
                What is this Right?
              </Text>
            </View>
          </View>
        </Card>
      ),
      trigger: '39',
    },
    {
      id: '39',
      component: (
        <Card
          style={{
            flex: 1,
            borderRadius: 17,
            width: '95%',
            overflow: 'hidden',
          }}
        >
          <View>
            <View style={{ padding: 12 }}>
              <Text style={{ fontSize: 13, lineHeight: 17 }}>
                Thats right! This right is:
              </Text>
            </View>
            <View
              style={{
                padding: 12,
                alignItems: 'center',
                backgroundColor: colors.effectOne,
                resizeMode: 'contain',
              }}
            >
              <View style={{ alignItems: 'center' }}>
                <Text
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: 12,
                    textAlign: 'center',
                  }}
                >
                  Right to
                </Text>
                <Text
                  style={{
                    color: 'rgba(255,255,255,1)',
                    fontSize: 24,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  {' '}
                  KNOW
                </Text>
              </View>
              <Text
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: 12,
                  textAlign: 'center',
                  width: '75%',
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >
                about the dangers of our jobs and how we are protected.
              </Text>
            </View>
          </View>
        </Card>
      ),
      trigger: '40',
    },
    // {
    //   id: '40',
    //   component: (
    //     <View>
    //       <Text>
    //         III. Right to refuse work we feel may be dangerous to ourselves or
    //         others.
    //       </Text>
    //     </View>
    //   ),
    //   trigger: '41',
    // },
    {
      id: '40',
      message:
        'Unsafe work has to do with 4 hazards outlined in OHS legislation. These are physical hazards, chemical hazards, biological hazards, and psychosocial hazards.',
      trigger: '41',
    },
    {
      id: '41',
      component: (
        <InChatRefButton
          onPress={() =>
            WebBrowser.openBrowserAsync(
              'https://www.alberta.ca/workplace-hazards.aspx',
            )
          }
          icon="web"
          style={{ marginBottom: 16 }}
        >
          Learn More
        </InChatRefButton>
      ),
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
      component: (
        <Card
          style={{
            flex: 1,
            borderRadius: 17,
            width: '95%',
            overflow: 'hidden',
          }}
        >
          <View>
            <View style={{ padding: 12 }}>
              <Text style={{ fontSize: 13, lineHeight: 17 }}>
                The steps you need to take as part of this right are:
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
              }}
            >
              <Swiper
                style={{ height: 220, backgroundColor: colors.effectOne }}
                activeDotColor={colors.white}
                dotColor="rgba(0,0,0,0.2)"
                nextButton={
                  <Icon
                    name="chevron-right"
                    size={26}
                    color="rgba(0,0,0,0.2)"
                  />
                }
                prevButton={
                  <Icon name="chevron-left" size={26} color="rgba(0,0,0,0.2)" />
                }
                showsButtons
              >
                <InChatRightsSlide01 />
                <InChatRightsSlide02 />
                <InChatRightsSlide03 />
              </Swiper>
            </View>
          </View>
        </Card>
      ),
      trigger: 'end injury prevention',
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
      trigger: '49',
    },
    {
      id: '49',
      message:
        "Restart this example if you'd like to see the different options available to you, choose another topic, or quit.",
      trigger: '50',
    },
    {
      id: '50',
      component: <EndChatInjuryCard />,
      trigger: 'restart option a',
    },
    {
      id: 'restart option a',
      options: [
        { value: 'A', label: 'A', trigger: 'injury prevention' },
        { value: 'B', label: 'B', trigger: 'racist incident' },
        { value: 'C', label: 'C', trigger: 'reporting injury' },
        { value: 'D', label: 'D', trigger: 'end_options' },
      ],
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
      trigger: '6a',
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
      trigger: '16a',
    },
    {
      id: '16a',
      options: [
        { value: 'yes', label: 'YES', trigger: '17a' },
        { value: 'no', label: 'NO', trigger: '20a' },
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
      trigger: '40a',
    },
    {
      id: '20a',
      message: 'Sorry to hear about that.',
      trigger: '21a',
    },
    {
      id: '21a',
      message:
        'Workers may not always feel safe reporting something to their bosses, because they know there will be consequences. ',
      trigger: '22a',
    },
    {
      id: '22a',
      message:
        "In other cases, unfortunately sometimes workplaces don't do anything about racism.",
      trigger: '23a',
    },
    {
      id: '23a',
      message:
        'For example, you may report something to your supervisor and your supervisor may just brush it off.',
      trigger: '24a',
    },
    {
      id: '24a',
      message:
        'There have been cases where racism is reported and nothing changes, or the actions taken are insufficient when you report racism. ',
      trigger: '25a',
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
      trigger: 'human rights complaint',
    },
    {
      id: 'human rights complaint',
      component: (
        <View>
          <InChatRefButton
            onPress={() =>
              WebBrowser.openBrowserAsync(
                'https://workershealthcentre.ca/4-health-and-safety-rights/',
              )
            }
            icon="web"
            style={{ marginBottom: 8, width: '80%' }}
          >
            AB Human Rights Complaint
          </InChatRefButton>
          <InChatRefButton
            onPress={() =>
              WebBrowser.openBrowserAsync(
                'https://www.alberta.ca/file-complaint-online.aspx',
              )
            }
            icon="web"
            style={{ width: '80%' }}
          >
            OHS File a Complaint
          </InChatRefButton>
        </View>
      ),
      trigger: '28a',
    },
    {
      id: '28a',
      message:
        'Human rights and racism relates to someone experiencing discrimination due to ethnocultural background, and OHS and racism relates to someone experiencing psychosocial hazards at work.',
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
      trigger: '40a',
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
      trigger: 'human rights complaint',
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
      trigger: '40a',
    },
    {
      id: '40a',
      component: <EndChatRacistCard />,
      trigger: 'restart option b',
    },
    {
      id: 'restart option b',
      options: [
        { value: 'A', label: 'A', trigger: 'racist incident' },
        { value: 'B', label: 'B', trigger: 'reporting injury' },
        { value: 'C', label: 'C', trigger: 'injury prevention' },
        { value: 'D', label: 'D', trigger: 'end_options' },
      ],
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
      id: '4b',
      message: 'You slip on a wet floor at work and hurt your wrist.',
      trigger: '6b',
    },
    {
      id: '5b',
      message: 'Thank you and have a great day',
      trigger: '68b',
    },
    {
      id: '6b',
      message: 'Do you report your injury?',
      trigger: '7b',
    },
    {
      id: '7b',
      options: [
        { value: 'yes', label: 'YES', trigger: '8b' },
        { value: 'no', label: 'NO', trigger: '16b' },
      ],
    },
    {
      id: '8b',
      message: 'Do you file WCB claim?',
      trigger: '9b',
    },
    {
      id: '9b',
      options: [
        { value: 'yes', label: 'YES', trigger: '10b' },
        { value: 'no', label: 'NO', trigger: '30b' },
      ],
    },

    {
      id: '10b',
      message:
        'Injuries at work need to be confirmed by a doctor in Alberta for a WCB claim to be accepted. All these visits are covered by Alberta Health. ',
      trigger: '11b',
    },
    {
      id: '11b',
      message:
        'There are also specific clinics that are part of the Occupational Injury Service in Alberta. Injured workers can expect to see a doctor within 30 minutes at these clinics.',
      trigger: '12b',
    },
    {
      id: '12b',
      message: 'You can find a list of these clinics below:',
      trigger: 'wcb clinics', // replace with learn_more
    },
    {
      id: 'wcb clinics',
      component: (
        <InChatRefButton
          onPress={() =>
            WebBrowser.openBrowserAsync(
              'https://www.wcb.ab.ca/treatment-and-recovery/get-treatment/occupational-injury-service-clinics-and-doctors/',
            )
          }
          icon="web"
        >
          OIS Clinics & Doctors
        </InChatRefButton>
      ),
      trigger: '13b',
    },
    {
      id: '13b',
      message:
        'Although any doctor can fill WCB paperwork, you will often be asked by WCB to go to a specific WCB-Doctor when you make a claim even if you have seen a doctor. ',
      trigger: '14b',
    },
    {
      id: '14b',
      message: 'Now that you have filed your WCB claim, is the claim accepted?',
      trigger: '15b',
    },

    {
      id: '16b',
      message:
        'In Alberta it is your right to report an injury to your employer and to the Workers Compensation Board.',
      trigger: '17b',
    },
    {
      id: '17b',
      message:
        "However, there are many reasons why a person doesn't want to report an injury to their boss. ",
      trigger: '18b',
    },
    {
      id: '18b',
      message:
        'For example, you may fear losing your job or may not want to admit a problem in front of them. ',
      trigger: '19b',
    },
    {
      id: '19b',
      message:
        "Similarly, not all injuries are the same. For some, a hurt wrist is a small matter if you know it will heal and you don't want to go through the process reporting it.",
      trigger: '20b',
    },
    {
      id: '20b',
      message:
        'Be aware that there are consequences for reporting and not reporting an injury.',
      trigger: '21b',
    },
    {
      id: '21b',
      options: [
        {
          value: 'What can happen?',
          label: ' What can happen?',
          trigger: '22b',
        },
      ],
    },
    {
      id: '22b',
      message:
        'In an ideal case, if you report an injury an employer will take the correct steps and ensure that you fill out the correct paperwork and receive the appropriate help.',
      trigger: '23b',
    },
    {
      id: '23b',
      message:
        'In the worst case, workers have been fired for not reporting an injury and hiding it because hiding the injury was against their workplace policy. ',
      trigger: '24b',
    },
    {
      id: '24b',
      message:
        'If such policies exist at your work, be sure to become familiar with them so that you know what can happen in the case of an injury.',
      trigger: '25b',
    },
    {
      id: '25b',
      message:
        'According to Alberta Occupational Health and Safety legislation, serious incidents of injury have to be reported to the Alberta government. ',
      trigger: '27b',
    },
    {
      id: '27b',
      message:
        'Unless you are admitted to hospital for more than two days because of the injury, you do not have to report this wrist injury to the Alberta government.',
      trigger: '28b',
    },
    {
      id: '28b',
      message:
        'For more information on what constitutes a serious injury, see below:',
      trigger: 'serious injury', // add learn more after it
    },
    {
      id: 'serious injury',
      component: (
        <InChatRefButton
          onPress={() =>
            WebBrowser.openBrowserAsync(
              'https://www.alberta.ca/report-potentially-serious-incidents.aspx#:~:text=An%20injury%20is%20considered%20serious,to%20hospital%20as%20an%20inpatient',
            )
          }
          icon="web"
        >
          Serious Injuries
        </InChatRefButton>
      ),
      trigger: '29b',
    },
    {
      id: '29b',
      message:
        'Great job! You have completed this section of Injury prevention & Training.', // add  restart button
      trigger: '68b',
    },

    {
      id: '30b',
      message:
        "Even if you do not feel your injury is serious enough to report, it is recommended to follow your company's policy and notify your manager and fill out any required paper work. ",
      trigger: '29b',
    },

    {
      id: '15b',
      options: [
        { value: 'yes', label: 'YES', trigger: '31b' },
        { value: 'no', label: 'NO', trigger: '32b' },
      ],
    },

    {
      id: '31b',
      message: 'Now you will enter the rehabilitation period. ',
      trigger: '33b',
    },

    {
      id: '32b',
      message: 'Let us explore your options.',
      trigger: '37b',
    },
    {
      id: '33b',
      options: [
        {
          value: 'rehabilitation',
          label: 'Rehabilitation period?',
          trigger: '34b',
        },
      ],
    },
    {
      id: '34b',
      message:
        'Rehabilitation is a process that involves you, your employer, WCB and any third-party health providers such as physiotherapists.',
      trigger: '35b',
    },
    {
      id: '35b',
      message:
        'According to the Workers Compensation Act, employers are required to get workers back to their regular work duties prior to the injury during rehabilitation.',
      trigger: '36b',
    },
    {
      id: '36b',
      message:
        'For more information, see page 49 from the Workers Compensation Act below:',
      trigger: 'workers compensation act', // add learn more after it
    },
    {
      id: 'workers compensation act',
      component: (
        <InChatRefButton
          onPress={() =>
            WebBrowser.openBrowserAsync(
              'https://www.qp.alberta.ca/1266.cfm?page=W15.cfm&leg_type=Acts&isbncln=9780779814497',
            )
          }
          icon="web"
          style={{ width: '85%' }}
        >
          Workers' Compensation Act
        </InChatRefButton>
      ),
      trigger: '44b',
    },
    {
      id: '37b',
      message:
        'WCB is an insurance company and this means that they may look for reasons to not accept your claim.',
      trigger: '38b',
    },
    {
      id: '38b',
      message:
        'Common reasons that claims are rejected are due to missed paperwork or paperwork that was not completed in time. ',
      trigger: '39b',
    },
    {
      id: '39b',
      message:
        'This means that it is important to fill out the correct paperwork within the 72 hour window if you want to receive WCB help.',
      trigger: '40b',
    },
    {
      id: '40b',
      message:
        'If your claim was rejected despite you being injured at work, you can contact the Calgary Workers Resource Centre and Alberta Employment Standards for free help.',
      trigger: '41b',
    },
    {
      id: '41b',
      message:
        'Would you like to know the contact information of these organizations?',
      trigger: '67b',
    },

    {
      id: '42b',
      options: [
        { value: 'yes', label: 'YES', trigger: 'resource link' }, // check for yes
        { value: 'no', label: 'NO', trigger: '43b' },
      ],
    },
    {
      id: '43b',
      message:
        'Okay, you can find their contact info in our resources page anytime you may need it.',
      trigger: '29b',
    },

    {
      id: '44b',
      message:
        'Rehabilitation will include a mix of time off, therapy and accommodated duties at work. ',
      trigger: '45b',
    },
    {
      id: '45b',
      message:
        'Considering your wrist injury, you will likely be able to have accommodated work. ',
      trigger: '46b',
    },
    {
      id: '46b',
      message:
        'During rehabilitation workers receive a wage replacement from WCB if they are unable to work because of their injury. This wage replacement is not taxed and is 90% of your regular wage. ',
      trigger: '47b',
    },
    {
      id: '47b',
      message:
        'WCB also covers health expense costs that are related to the injury, such as medication and physiotherapy.',
      trigger: '48b',
    },
    {
      id: '48b',
      message:
        'Be aware that due to the costs involved, WCB only looks at one issue at a time even in the case of complex injuries. ',
      trigger: '49b',
    },
    {
      id: '49b',
      message:
        'Accommodated duties means being provided work at your regular wage and work that you can do with your injury.',
      trigger: '50b',
    },
    {
      id: '50b',
      message:
        'Employers may not be able to provide this work and if they cannot, then you will still be compensated by WCB.',
      trigger: '51b',
    },
    {
      id: '51b',
      message:
        'It is also illegal for employers to lay you off while you are on injury or fire you because of your injury, and employers can face a heavy fine if they do!',
      trigger: '52b',
    },
    {
      id: '52b',
      message:
        'For more information, see page 82 from the Workers Compensation Act below:',
      trigger: 'workers compensation act2',
    },
    {
      id: 'workers compensation act2',
      component: (
        <InChatRefButton
          onPress={() =>
            WebBrowser.openBrowserAsync(
              'https://www.qp.alberta.ca/1266.cfm?page=W15.cfm&leg_type=Acts&isbncln=9780779814497',
            )
          }
          icon="web"
          style={{ width: '85%' }}
        >
          Workers' Compensation Act
        </InChatRefButton>
      ),
      trigger: '53b',
    },
    {
      id: '53b',
      message:
        'Now that the rehabilitation period is over, are you able to return to work?',
      trigger: '54b',
    },
    {
      id: '54b',
      options: [
        { value: 'yes', label: 'YES', trigger: '55b' },
        { value: 'no', label: 'NO', trigger: '57b' },
      ],
    },
    {
      id: '55b',
      message:
        'As rehabilitation will include a mix of time off, therapy and accommodated duties at work, you may return to work in a limited or different capacity until you are healed and able to go back to your regular duties.',
      trigger: '56b',
    },
    {
      id: '56b',
      message:
        'If this is the case, then your WCB claim will be closed and you can go back to your job.',
      trigger: '29b',
    },
    {
      id: '57b',
      message: "Let's explore your options.",
      trigger: '58b',
    },
    {
      id: '58b',
      message:
        'Going through the WCB process can be long, expensive, and can be physically and emotionally draining. ',
      trigger: '59b',
    },
    {
      id: '59b',
      message:
        'According to the Workers Compensation Act, you need to go through this process if an injury took place at work and your injury claim was accepted. ',
      trigger: 'workers compensation act3', // add learn more
    },
    {
      id: 'workers compensation act3',
      component: (
        <InChatRefButton
          onPress={() =>
            WebBrowser.openBrowserAsync(
              'https://www.qp.alberta.ca/1266.cfm?page=W15.cfm&leg_type=Acts&isbncln=9780779814497',
            )
          }
          icon="web"
          style={{ width: '85%' }}
        >
          Workers' Compensation Act
        </InChatRefButton>
      ),
      trigger: '60b',
    },
    {
      id: '60b',
      message:
        'Due to the costs of rehabilitating workers, employers have been known to bully workers to the point where they want to quit. ',
      trigger: '61b',
    },
    {
      id: '61b',
      message:
        'WCB has also been known to push workers back to work even if they are at risk of re-injuring or not able to work. ',
      trigger: '62b',
    },
    {
      id: '62b',
      message:
        'Furthermore, there are cases where employers try to find reasons to fire employees while you are on workers compensation. ',
      trigger: '63b',
    },
    {
      id: '63b',
      message:
        'As the Workers Compensation Act clearly states that employees cannot be fired due to their injury, there have been cases where employers look for reasons to fire a worker that is non-injury related. ',
      trigger: '64b',
    },
    {
      id: '64b',
      message:
        'For example, they may look for reasons for firing you. Even though this is illegal, this may happen.',
      trigger: '65b',
    },
    {
      id: '65b',
      message:
        'Should this happen, you can always contact the Calgary Workers Resource Centre and Alberta Employment Standards for free help regarding wrongful termination.',
      trigger: '66b',
    },
    {
      id: '66b',
      message:
        'Would you like to know the contact information of these organizations?',
      trigger: '67b',
    },
    {
      id: '67b',
      options: [
        { value: 'yes', label: 'YES', trigger: 'resource link' },
        { value: 'no', label: 'NO', trigger: '43b' },
      ],
    },
    {
      id: 'resource link',
      message:
        'You can find them in our resources page by clicking the below link',
      trigger: 'resources',
    },
    {
      id: 'resources',
      component: (
        <InChatRefButton
          onPress={() => {
            navigation.navigate('Resources');
          }}
          icon="book-open-page-variant"
          style={{ width: '70%' }}
        >
          {' '}
          Resources Page
        </InChatRefButton>
      ),
      trigger: '29b',
    },
    {
      id: '68b',
      message:
        "Restart this example if you'd like to see the different options available to you, choose another topic, or quit.",
      trigger: '69b',
    },
    {
      id: '69b',
      component: (
        //   <View>
        //     <Button
        //       onPress={() => {
        //         navigation.navigate('Reporting & Filing An Injury');
        //       }}
        //       title="Restart"
        //     />
        //     <Button
        //       onPress={() => {
        //         navigation.navigate('Racist Incident');
        //       }}
        //       title="Racist Incident"
        //     />
        //     <Button
        //       onPress={() => {
        //         navigation.navigate('Injury Prevention & Training');
        //       }}
        //       title="Injury Prevention & Training"
        //     />
        //     <Button
        //       onPress={() => {
        //         navigation.navigate('Find Your Voice');
        //       }}
        //       title="Quit"
        //     />
        //   </View>
        <EndChatReportingCard />
      ),
      trigger: 'restart option c',
    },
    {
      id: 'restart option c',
      options: [
        { value: 'A', label: 'A', trigger: 'reporting injury' },
        { value: 'B', label: 'B', trigger: 'injury prevention' },
        { value: 'C', label: 'C', trigger: 'racist incident' },
        { value: 'D', label: 'D', trigger: 'end_options' },
      ],
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
