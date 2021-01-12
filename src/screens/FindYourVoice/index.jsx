import React from 'react';
import { Alert, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import { Card } from 'react-native-paper';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as StoreReview from 'expo-store-review';

import FyvChatBot from 'components/ChatBot';
import BasicButton from 'components/BasicButton';
import EndChatInjuryCard from 'components/EndChatInjuryCard';
import EndChatRacistCard from 'components/EndChatRacistCard';
import InChatRefButton from 'components/InChatRefButton';
import colors from 'config/colors.json';
import Subheading from 'components/Subheading';
import Paragraph from 'components/Paragraph';

import RoundButton from 'components/RoundButton';
import ContentSlider from 'components/ContentSlider';
import slides from './rightslides';
import {
  InChatRightsSlide01,
  InChatRightsSlide02,
  InChatRightsSlide03,
  InChatRightsSlide04,
} from './slides';

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
            StoreReview.requestReview();
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

      message:
        'Which topic would you like to know more about: Injury At Work, Racist Incident, or Injury Prevention &  Training?',
      trigger: 'Injury Prevention Options',
    },
    {
      id: 'Injury Prevention Options',
      options: [
        {
          value: 'reporting',
          label: 'Injury At Work',
          trigger: 'reporting injury',
        },
        {
          value: 'racist incident',
          label: 'Racist Incident',
          trigger: 'racist incident',
        },
        {
          value: 'injury',
          label: 'Injury Prevention & Training',
          trigger: 'injury prevention',
        },
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
      message: 'You are asked to do something you were not trained to do.',
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
        { value: 'yes', label: 'YES, I do', trigger: 'right to know' },
        { value: 'no', label: "NO, I don't", trigger: '9' },
      ],
    },
    {
      id: 'right to know',
      message: 'Right to Know – OHS Legislation',
      trigger: '8',
    },
    {
      id: '8',
      message:
        'According to the Government of Alberta, workers have the right to know about workplace dangers and how they are protected from hazards.',
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
      message:
        'All workers should feel safe to say they are not trained to do a task or to say a task is not safe.',
      trigger: '15',
    },
    {
      id: '10',
      message:
        "If you are asked to do something you weren't trained to do at work, you do not have to do it immediately.",
      trigger: 'you have the right to know',
    },
    {
      id: 'you have the right to know',
      message:
        'You have a right to know what hazards you may face and to receive training on how to do the job safely.',
      trigger: '11',
    },
    {
      id: '11',
      message:
        'For example, if you are handed a bottle of cleaner with no label on it, you have a right to ask what is in it, what hazards are associated with it and how you can protect yourself from the hazards. ',
      trigger: 'all rights',
    },
    {
      id: 'all rights',
      component: <ContentSlider showsButtons slides={slides} />,
      trigger: '12',
    },

    {
      id: 'right to know card',
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
                OHS Legislation
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
        {
          value: 'yes',
          label: 'YES, It is',
          trigger: 'end injury prevention',
        },
        { value: 'no', label: "NO, It's not", trigger: '14' },
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
      message:
        "Sometimes, it is not as simple as saying no to something you don't think is safe.",
      trigger: '16',
    },
    {
      id: '16',
      message:
        'Refusing to work can be scary, and you may fear consequences, such as fewer shifts, insults, or your manager getting angry.',
      trigger: '17',
    },
    {
      id: '17',
      message:
        'However, it is your right to be trained to do a task and to refuse to do work that is not safe.',
      trigger: 'all rights 2',
    },
    {
      id: 'all rights 2',
      component: <ContentSlider showsButtons slides={slides} />,
      trigger: 'take steps',
    },
    {
      id: 'take steps',
      message: 'If you refuse unsafe work, the steps you need to take are:',
      trigger: '45',
    },
    {
      id: '18',
      message:
        'You have the right to refuse unsafe work - ask for information or actions to be taken.',
      trigger: '35',
    },
    // {
    //   id: '19',
    //   message:
    //     'Information is one of the best tools workers can have, as it helps you maneuver the complicated world of the workplace and health and safety legislation. ',
    //   trigger: '20',
    // },
    // {
    //   id: '20',
    //   message: 'Information can also be overwhelming and/or confusing. ',
    //   trigger: '21',
    // },
    // {
    //   id: '21',
    //   message:
    //     "For example, many newcomers who start a new job are assumed to understand their training even when it is too quick or too much. Let's look at another example:",
    //   trigger: '22',
    // },
    // {
    //   id: '22',
    //   message:
    //     'Ana, a new worker at Home Depot was given 6 hours to read a large training packet in English. Afterwards, she was asked a few questions and passed a test. However, given the amount of information she read she forgot most of it in a few days and there were no training follow-ups and refreshers. ',
    //   trigger: '23',
    // },
    // {
    //   id: '23',
    //   message: 'Are you following?',
    //   trigger: '24',
    // },
    // {
    //   id: '24',
    //   options: [
    //     { value: 'yes', label: 'YES, I am', trigger: '25' },
    //     { value: 'no', label: 'NO, I am lost', trigger: '26' },
    //   ],
    // },
    // {
    //   id: '25',
    //   message: 'great',
    //   trigger: '27',
    // },
    // {
    //   id: '26',
    //   message: 'Please scroll up and read these examples again',
    //   trigger: '23',
    // },
    // {
    //   id: '27',
    //   message: 'Information can come from a variety of sources. ',
    //   trigger: 'information sources',
    // },
    // {
    //   id: 'information sources',
    //   options: [
    //     {
    //       value: 'What are some sources?',
    //       label: 'What are some sources?',
    //       trigger: '28',
    //     },
    //   ],
    // },
    // {
    //   id: '28',
    //   message:
    //     'For example, you can get it during training and from your boss. ',
    //   trigger: '29',
    // },
    // {
    //   id: '29',
    //   message:
    //     'One of the best sources of information can be from trusted colleagues. These can be people you trust, that have your safety in mind, and share your native language. ',
    //   trigger: '30',
    // },
    // {
    //   id: '30',
    //   message:
    //     'For example, workers often go during their lunch break to their native language speaker colleagues to learn more about work matters related to safety and clarify confusing matters.  ',
    //   trigger: '31',
    // },
    // {
    //   id: '31',
    //   message: 'Are you clear on these informations so far?',
    //   trigger: '32',
    // },
    // {
    //   id: '32',
    //   options: [
    //     { value: 'yes', label: 'YES, I am', trigger: 'end injury prevention' },
    //     { value: 'no', label: 'NO, I am not', trigger: '34' },
    //   ],
    // },
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
                nextButton={(
                  <Icon
                    name="chevron-right"
                    size={26}
                    color="rgba(0,0,0,0.2)"
                  />
                )}
                prevButton={
                  <Icon name="chevron-left" size={26} color="rgba(0,0,0,0.2)" />
                }
                showsButtons
              >
                <InChatRightsSlide01 />
                <InChatRightsSlide02 />
                <InChatRightsSlide03 />
                <InChatRightsSlide04 />
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
      trigger: 'restart option a',
    },
    {
      id: '50',
      component: <EndChatInjuryCard />,
      trigger: 'restart option a',
    },
    {
      id: 'restart option a',
      options: [
        { value: 'A', label: 'Restart', trigger: 'injury prevention' },
        {
          value: 'B',
          label: 'Injury At Work',
          trigger: 'reporting injury',
        },
        { value: 'C', label: 'Racist Incident', trigger: 'racist incident' },

        { value: 'D', label: 'Quit', trigger: 'end_options' },
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
      message: 'You reported it.',
      trigger: '13a',
    },
    {
      id: '9a',
      message: 'To be added',
      trigger: 'end_options',
    },
    // {
    //   id: '10a',
    //   message:
    //     'According to OHS legislation and most workplace policies, you should report it to your direct supervisor.',
    //   trigger: '11a',
    // },
    // {
    //   id: '11a',
    //   message:
    //     'However, sometimes you may feel that you need to talk to a colleague for advice, or to share your experience with someone who is going through similar things.',
    //   trigger: '12a',
    // },
    // {
    //   id: '12a',
    //   message:
    //     'This is another step you can take, as experiencing this alone can be hard and isolating.',
    //   trigger: '13a',
    // },
    {
      id: '13a',
      message: 'Was there an action taken by management afterwards?',
      trigger: '14a',
    },
    {
      id: '14a',
      options: [
        { value: 'yes', label: 'YES, an action was taken', trigger: '15a' },
        { value: 'no', label: 'No Action was taken', trigger: '20a' },
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
        { value: 'yes', label: 'YES, It makes me feel safer', trigger: '17a' },
        { value: 'no', label: 'NO, It does not', trigger: '20a' },
      ],
    },
    {
      id: '17a',
      message: "That's great! :) ",
      trigger: '38a',
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
      trigger: 'restart option b',
    },
    {
      id: '20a',
      message: 'Even if still do not feel safe, there are options:',
      trigger: '25a',
    },
    // {
    //   id: '21a',
    //   message:
    //     'Workers may not always feel safe reporting something to their bosses, because they know there will be consequences. ',
    //   trigger: '22a',
    // },
    // {
    //   id: '22a',
    //   message:
    //     "In other cases, unfortunately sometimes workplaces don't do anything about racism.",
    //   trigger: '23a',
    // },
    // {
    //   id: '23a',
    //   message:
    //     'For example, you may report something to your supervisor and your supervisor may just brush it off.',
    //   trigger: '24a',
    // },
    // {
    //   id: '24a',
    //   message:
    //     'There have been cases where racism is reported and nothing changes, or the actions taken are insufficient when you report racism. ',
    //   trigger: '25a',
    // },
    {
      id: '25a',
      message:
        'For example, Flora works on an assembly line in a meat packing plant which is male dominated. As the only woman of colour there, she has politely brought up numerous racist and mysoginist incidents to Human Resources hoping for change. Although the Human Resources manager listened and promised to look into it, nothing changed and continues to hear the same things at work. She struggles because she needs the job even though it is a toxic workplace.',
      trigger: '26a',
    },

    {
      id: '26a',
      message:
        'Even if issues are not addressed, workers like Flora have options:',
      trigger: 'item 1',
    },
    {
      id: 'item 1',
      message:
        '1) Talk to a union representative if you are in a union, or talk to a trusted co-worker for support. ',
      trigger: 'item 2',
    },
    {
      id: 'item 2',
      message:
        '2) Workers also have the option of making a human rights complaint to the Alberta Human Rights Tribunal. Human rights and racism relate to someone experiencing discrimination due to race and/or religion. Refer to this Human Rights plain language guide for more information.',
      trigger: 'plain language guide 2',
    },
    {
      id: 'plain language guide 2',
      component: (
        <View>
          <InChatRefButton
            onPress={async () =>
              WebBrowser.openBrowserAsync(
                'https://www.albertahumanrights.ab.ca/Documents/HR_in_AB_printable_booklet.pdf',
              )
            }
            style={{ width: '80%' }}
          >
            Human Rights Plain Language Guide
          </InChatRefButton>
          <InChatRefButton
            onPress={async () =>
              WebBrowser.openBrowserAsync(
                'https://www.albertahumanrights.ab.ca/complaints/forms/Pages/complaint_form_and_guide.aspx',
              )
            }
            icon="web"
            style={{ marginTop: 8, width: '80%' }}
          >
            Alberta Human Rights Complaint
          </InChatRefButton>
        </View>
      ),
      trigger: 'item 3',
    },
    {
      id: 'item 3',
      message:
        '3) Make a health and safety complaint to the Government of Alberta. Health and safety and racism relates to someone experiencing harassment at work. ',
      trigger: 'ohs complaint',
    },
    {
      id: 'ohs complaint',
      component: (
        <InChatRefButton
          onPress={async () =>
            await WebBrowser.openBrowserAsync(
              'https://www.alberta.ca/file-complaint-online.aspx',
            )
          }
          icon="web"
          style={{ width: '80%' }}
        >
          OHS File a Complaint
        </InChatRefButton>
      ),
      trigger: '38a',
    },
    {
      id: '27a',
      message:
        'If you reported it and nothing changes, some last resorts may be making a human rights complaint and a health and safety complaint. ',
      trigger: 'file a complaint',
    },
    {
      id: 'plain language guide',
      component: (
        <InChatRefButton
          onPress={async () =>
            await WebBrowser.openBrowserAsync(
              'https://www.albertahumanrights.ab.ca/Documents/HR_in_AB_printable_booklet.pdf',
            )
          }
          style={{ width: '80%' }}
        >
          Human Rights Plain Language Guide
        </InChatRefButton>
      ),
      trigger: '37a',
    },
    {
      id: 'file a complaint',
      component: (
        <View>
          <InChatRefButton
            onPress={async () =>
              await WebBrowser.openBrowserAsync(
                'https://www.albertahumanrights.ab.ca/complaints/forms/Pages/complaint_form_and_guide.aspx',
              )
            }
            icon="web"
            style={{ marginBottom: 8, width: '80%' }}
          >
            Albreta Human Rights Complaint
          </InChatRefButton>
          <InChatRefButton
            onPress={async () =>
              await WebBrowser.openBrowserAsync(
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
      trigger: 'continue',
    },
    {
      id: 'continue',
      options: [
        {
          value: 'Continue',
          label: 'Continue',
          trigger: '38a',
        },
      ],
    },
    // {
    //   id: '28a',
    //   message:
    //     'Human rights and racism relates to someone experiencing discrimination due to ethnocultural background, and OHS and racism relates to someone experiencing psychosocial hazards at work.',
    //   trigger: '29a',
    // },
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
      trigger: 'restart option b',
    },
    {
      id: '31a',
      message:
        'As someone new to Canada, it is normal to be scared or unsure in these cases.',
      trigger: '32a',
    },
    {
      id: '32a',
      message:
        'If you are not sure what to do, check if your company has a harassment, respect in the workplace policy, an anti-bullying policy, a discrimination policy, or any policy that relates to racism. Employers are required to have these under the OHS Act.',
      trigger: '33a',
    },
    {
      id: '33a',
      message:
        'If you do not feel comfortable reporting this to your supervisor, you may also want to talk to a trusted co-worker, someone in Human Resources (if your workplace has this department), or a union representative (if you are in a union).',
      trigger: '34a',
    },
    {
      id: '34a',
      message:
        'Human rights and racism relate to someone experiencing discrimination due to race and/or religion, and health and safety and racism relates to someone experiencing harassment at work.',
      trigger: '35a',
    },
    {
      id: '35a',
      message:
        'Refer to this Human Rights plain language guide below for more information.',
      trigger: 'plain language guide',
    },
    // {
    //   id: '36a',
    //   message:
    //     'It may be worth talking to someone in Human Resources if you feel you can trust them.',
    //   trigger: 'human rights complaint',
    // },
    {
      id: '37a',
      message:
        'Workers also have the option of making a human rights complaint to the Alberta Human Rights Tribunal and a health and safety complaint to the Government of Alberta.',
      trigger: 'do you understand',
    },
    {
      id: 'complaints',
      message: 'Good! Complaints can be accessed by clicking the link below',
      trigger: 'file a complaint',
    },
    {
      id: 'do you understand',
      message: 'Do you understand?',
      trigger: 'checkpoint',
    },
    {
      id: 'checkpoint',
      options: [
        { value: 'yes', label: 'Yes I do', trigger: 'complaints' },
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
      message: 'Great job! You have completed this section of Racist Incident.',
      trigger: '39a',
    },
    {
      id: '39a',
      message:
        "Restart this example if you'd like to see the different options available to you, choose another topic, or quit.",
      trigger: 'restart option b',
    },
    {
      id: '40a',
      component: <EndChatRacistCard />,
      trigger: 'restart option b',
    },
    {
      id: 'restart option b',
      options: [
        { value: 'A', label: 'Restart', trigger: 'racist incident' },
        {
          value: 'B',
          label: 'Injury Prevention & Training',
          trigger: 'injury prevention',
        },
        {
          value: 'A',
          label: 'Injury At Work',
          trigger: 'reporting injury',
        },

        { value: 'D', label: 'Quit', trigger: 'end_options' },
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
        { value: 'yes', label: 'YES, I report it', trigger: '8b' },
        { value: 'no', label: "NO, I don't report it", trigger: '16b' },
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
        { value: 'yes', label: 'YES, I do', trigger: 'see a doctor' },
        { value: 'no', label: "NO, I don't", trigger: '30b' },
      ],
    },
    {
      id: 'see a doctor',
      message: 'If you are hurt at work, you should see a doctor.',
      trigger: '10b',
    },

    {
      id: '10b',
      message:
        "Injuries at work need to be confirmed by a doctor in Alberta for a WCB claim to be accepted. All these visits are covered by Alberta Health. Some workers complete their WCB forms at the doctor's office because they feel more comfortable there.",
      trigger: '14b',
    },
    // {
    //   id: '11b',
    //   message:
    //     'There are also specific clinics that are part of the Occupational Injury Service in Alberta. Injured workers can expect to see a doctor within 30 minutes at these clinics.',
    //   trigger: '12b',
    // },
    // {
    //   id: '12b',
    //   message: 'You can find a list of these clinics below:',
    //   trigger: 'wcb clinics', // replace with learn_more
    // },
    // {
    //   id: 'wcb clinics',
    //   component: (
    //     <InChatRefButton
    //       onPress={() =>
    //         WebBrowser.openBrowserAsync(
    //           'https://www.wcb.ab.ca/treatment-and-recovery/get-treatment/occupational-injury-service-clinics-and-doctors/',
    //         )
    //       }
    //       icon="web"
    //     >
    //       OIS Clinics & Doctors
    //     </InChatRefButton>
    //   ),
    //   trigger: 'continue1',
    // },
    // {
    //   id: 'continue1',
    //   options: [
    //     {
    //       value: 'Continue',
    //       label: 'Continue',
    //       trigger: '13b',
    //     },
    //   ],
    // },
    // {
    //   id: '13b',
    //   message:
    //     'Although any doctor can fill WCB paperwork, you will often be asked by WCB to go to a specific WCB-Doctor when you make a claim even if you have seen a doctor. ',
    //   trigger: '14b',
    // },
    {
      id: '14b',
      message: 'You file a claim, is the claim accepted?',
      trigger: '15b',
    },

    {
      id: '16b',
      message:
        'In Alberta it is your right to report an injury to your employer and to the Workers Compensation Board (WCB).',
      trigger: '17b',
    },
    {
      id: '17b',
      message: 'Your employer also has to report any injuries to WCB.',
      trigger: '18b',
    },
    {
      id: '18b',
      message:
        'Sometimes workers do not want to report an injury to their boss because they may fear losing their job, or may not want to admit a problem.',
      trigger: '19b',
    },
    {
      id: '19b',
      message:
        'However, it is always better to report an injury to WCB. Laws protect workers who want to report an injury.',
      trigger: 'if injured at work',
    },
    {
      id: 'if injured at work',
      message:
        'If you are injured at work, there may be policies at your work for how to report. Be sure to become familiar with them so that you know what can happen in the case of an injury.',
      trigger: 'WCB language instructions',
    },
    {
      id: 'WCB language instructions',
      message:
        'WCB has instructions in many languages for reporting an injury, and these include Punjabi, Tagalog, Arabic, and more.',
      trigger: 'click intructions',
    },
    {
      id: 'click intructions',
      message: 'Click below for more information.',
      trigger: 'WCB languages',
    },
    // {
    //   id: '20b',
    //   message:
    //     'Be aware that there are consequences for reporting and not reporting an injury.',
    //   trigger: '21b',
    // },
    // {
    //   id: '21b',
    //   options: [
    //     {
    //       value: 'What can happen?',
    //       label: ' What can happen?',
    //       trigger: '22b',
    //     },
    //   ],
    // },
    // {
    //   id: '22b',
    //   message:
    //     'In an ideal case, if you report an injury an employer will take the correct steps and ensure that you fill out the correct paperwork and receive the appropriate help.',
    //   trigger: '23b',
    // },
    // {
    //   id: '23b',
    //   message:
    //     'In the worst case, workers have been fired for not reporting an injury and hiding it because hiding the injury was against their workplace policy. ',
    //   trigger: '24b',
    // },
    // {
    //   id: '24b',
    //   message:
    //     'If such policies exist at your work, be sure to become familiar with them so that you know what can happen in the case of an injury.',
    //   trigger: '25b',
    // },
    // {
    //   id: '25b',
    //   message:
    //     'According to Alberta Occupational Health and Safety legislation, serious incidents of injury have to be reported to the Alberta government. ',
    //   trigger: '27b',
    // },
    // {
    //   id: '27b',
    //   message:
    //     'Unless you are admitted to hospital for more than two days because of the injury, you do not have to report this wrist injury to the Alberta government.',
    //   trigger: '28b',
    // },
    // {
    //   id: '28b',
    //   message:
    //     'For more information on what constitutes a serious injury, see below:',
    //   trigger: 'serious injury', // add learn more after it
    // },
    {
      id: 'WCB languages',
      component: (
        <InChatRefButton
          onPress={() =>
            WebBrowser.openBrowserAsync(
              'https://www.wcb.ab.ca/claims/the-claims-process/for-workers.html',
            )
          }
          icon="web"
        >
          WCB Languages
        </InChatRefButton>
      ),
      trigger: 'continue4',
    },
    {
      id: 'continue4',
      options: [
        {
          value: 'Continue',
          label: 'Continue',
          trigger: '29b',
        },
      ],
    },
    {
      id: '29b',
      message: 'Great job! You have completed this section of Injury at Work.', // add  restart button
      trigger: '68b',
    },

    {
      id: '30b',
      message:
        "Even if you do not feel your injury is serious enough to report, you should follow your workplace's policy, tell your employer, and report it to WCB.",
      trigger: '29b',
    },

    {
      id: '15b',
      options: [
        { value: 'yes', label: 'YES, it was accepted', trigger: '31b' },
        { value: 'no', label: 'NO, it was not', trigger: '32b' },
      ],
    },

    {
      id: '31b',
      message: 'Now you will enter the rehabilitation period. ',
      trigger: '33b',
    },

    {
      id: '32b',
      message:
        'If your claim is not accepted, this is not the end. Common reasons that claims are rejected are because of paperwork that was not completed in time.',
      trigger: 'Employer notify',
    },
    {
      id: 'Employer notify',
      message:
        'Employers must notify WCB within 72 hours and workers in Alberta have 24 months to make a claim, but a worker should make a claim as soon as possible.',
      trigger: 'claim not accepted',
    },
    {
      id: 'claim not accepted',
      message:
        " If your claim was not accepted even though you were injured at work, you can contact the Calgary Workers' Resource Centre for free help.",
      trigger: 'workers resource',
    },
    {
      id: 'workers resource',
      component: (
        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            borderRadius: 16,
            marginBottom: 16,
            width: '100%',
            shadowColor: colors.black,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.22,
            shadowRadius: 2.2,
            elevation: 3,
          }}
        >
          <View style={{ paddingHorizontal: 24, paddingTop: 24 }}>
            <Subheading>Calgary Workers' Resource Centre</Subheading>

            <Paragraph>
              Calgary Workers' Resource Centre provides free case work and a
              public legal education program if you are having issues
              understanding your rights in your workplace.
            </Paragraph>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              backgroundColor: colors.lightGrey,
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              borderTopColor: colors.mediumGrey,
              borderTopWidth: 1,
              borderStyle: 'solid',
            }}
          >
            <RoundButton type="web" target="https://www.helpwrc.org/" />
            ,
            <View
              style={{ borderLeftWidth: 1, borderLeftColor: colors.mediumGrey }}
            />
            <RoundButton type="phone" target="+1 403-264-8100" />
          </View>
          ,
        </View>
      ),
      trigger: 'continue WCB question',
    },
    {
      id: 'continue WCB question',
      options: [
        {
          value: 'Continue',
          label: 'Continue',
          trigger: 'question WCB decision',
        },
      ],
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
      id: 'question WCB decision',
      message:
        'You may also question a WCB decision. For more information on this, click below.',
      trigger: 'questioning a decision',
    },
    {
      id: 'questioning a decision',
      component: (
        <InChatRefButton
          onPress={() =>
            WebBrowser.openBrowserAsync(
              'https://www.wcb.ab.ca/assets/pdfs/workers/WFS_Questioning_a_WCB_Decision.pdf',
            )
          }
          icon="web"
        >
          Question a Decision
        </InChatRefButton>
      ),
      trigger: 'question process',
    },
    {
      id: 'question process',
      message:
        'To go through the process of questioning a decision, click below to find the document "Question a WCB-Alberta Decision" under Appeals, and select the language of your choice. These include English, Punjabi, Chinese (Simplified), and more.',
      trigger: 'questioning',
    },
    {
      id: 'questioning',
      component: (
        <InChatRefButton
          onPress={() =>
            WebBrowser.openBrowserAsync(
              'https://www.wcb.ab.ca/resources/for-workers/fact-sheets.html',
            )
          }
          icon="web"
        >
          Questioning Process
        </InChatRefButton>
      ),
      trigger: '29b',
    },
    {
      id: '34b',
      message:
        'Rehabilitation involves you, your employer, WCB and any third-party health providers such as physiotherapists. The goal is to get workers safely back to their regular work duties.',
      trigger: '35b',
    },
    {
      id: '35b',
      message:
        'Rehabilitation may include time off, therapy, and modified duties at work. Employers have a duty to accommodate an injured worker.',
      trigger: '36b',
    },
    {
      id: '36b',
      message:
        'Accommodated duties are work that you can do with your injury at your regular pay. If employers are not able to give you accommodated duties, you will still be paid by WCB for a period of time.',
      trigger: 'during rehabilitation', // add learn more after it
    },
    {
      id: 'during rehabilitation',
      message:
        'During rehabilitation workers receive pay from WCB if they are unable to work because of their injury. This WCB pay is not taxed and is 90% of your regular pay. WCB also covers health costs that are related to the injury, such as medication and physiotherapy.',
      trigger: 'continue2', // add learn more after it
    },
    // {
    //   id: 'workers compensation act',
    //   component: (
    //     <InChatRefButton
    //       onPress={() =>
    //         WebBrowser.openBrowserAsync(
    //           'https://www.qp.alberta.ca/1266.cfm?page=W15.cfm&leg_type=Acts&isbncln=9780779814497',
    //         )
    //       }
    //       icon="web"
    //       style={{ width: '85%' }}
    //     >
    //       Workers' Compensation Act
    //     </InChatRefButton>
    //   ),
    //   trigger: 'continue2',
    // },
    // {
    //   id: 'continue2',
    //   options: [
    //     {
    //       value: 'Continue',
    //       label: 'Continue',
    //       trigger: '44b',
    //     },
    //   ],
    // },
    {
      id: 'during rehabilitation',
      message: 'During rehabilitation, can you return to work?',
      trigger: '54b',
    },
    // {
    //   id: '37b',
    //   message:
    //     'WCB is an insurance company and this means that they may look for reasons to not accept your claim.',
    //   trigger: '38b',
    // },
    // {
    //   id: '38b',
    //   message:
    //     'Common reasons that claims are rejected are due to missed paperwork or paperwork that was not completed in time. ',
    //   trigger: '39b',
    // },
    // {
    //   id: '39b',
    //   message:
    //     'This means that it is important to fill out the correct paperwork within the 72 hour window if you want to receive WCB help.',
    //   trigger: '40b',
    // },
    // {
    //   id: '40b',
    //   message:
    //     "If your claim was rejected despite you being injured at work, you can contact the Calgary Workers' Resource Centre and Alberta Employment Standards for free help.",
    //   trigger: '41b',
    // },
    // {
    //   id: '41b',
    //   message:
    //     'Would you like to know the contact information of these organizations?',
    //   trigger: '67b',
    // },

    // {
    //   id: '42b',
    //   options: [
    //     { value: 'yes', label: 'YES', trigger: 'resource link' }, // check for yes
    //     { value: 'no', label: 'NO', trigger: '43b' },
    //   ],
    // },
    // {
    //   id: '43b',
    //   message:
    //     'Okay, you can find their contact info in our resources page anytime you may need it.',
    //   trigger: '29b',
    // },

    // {
    //   id: '44b',
    //   message:
    //     'Rehabilitation will include a mix of time off, therapy and accommodated duties at work. ',
    //   trigger: '45b',
    // },
    // {
    //   id: '45b',
    //   message:
    //     'Considering your wrist injury, you will likely be able to have accommodated work. ',
    //   trigger: '46b',
    // },
    // {
    //   id: '46b',
    //   message:
    //     'During rehabilitation workers receive a wage replacement from WCB if they are unable to work because of their injury. This wage replacement is not taxed and is 90% of your regular wage. ',
    //   trigger: '47b',
    // },
    // {
    //   id: '47b',
    //   message:
    //     'WCB also covers health expense costs that are related to the injury, such as medication and physiotherapy.',
    //   trigger: '48b',
    // },
    // {
    //   id: '48b',
    //   message:
    //     'Be aware that due to the costs involved, WCB only looks at one issue at a time even in the case of complex injuries. ',
    //   trigger: 'continue3',
    // },
    // {
    //   id: 'continue3',
    //   options: [
    //     {
    //       value: 'Continue',
    //       label: 'Continue',
    //       trigger: '49b',
    //     },
    //   ],
    // },
    // {
    //   id: '49b',
    //   message:
    //     'Accommodated duties means being provided work at your regular wage and work that you can do with your injury.',
    //   trigger: '50b',
    // },
    // {
    //   id: '50b',
    //   message:
    //     'Employers may not be able to provide this work and if they cannot, then you will still be compensated by WCB.',
    //   trigger: '51b',
    // },
    // {
    //   id: '51b',
    //   message:
    //     'It is also illegal for employers to lay you off while you are on injury or fire you because of your injury, and employers can face a heavy fine if they do!',
    //   trigger: '52b',
    // },
    // {
    //   id: '52b',
    //   message:
    //     'For more information, see page 82 from the Workers Compensation Act below:',
    //   trigger: 'workers compensation act2',
    // },
    // {
    //   id: 'workers compensation act2',
    //   component: (
    //     <InChatRefButton
    //       onPress={() =>
    //         WebBrowser.openBrowserAsync(
    //           'https://www.qp.alberta.ca/1266.cfm?page=W15.cfm&leg_type=Acts&isbncln=9780779814497',
    //         )
    //       }
    //       icon="web"
    //       style={{ width: '85%' }}
    //     >
    //       Workers' Compensation Act
    //     </InChatRefButton>
    //   ),
    //   trigger: '53b',
    // },
    // {
    //   id: '53b',
    //   message:
    //     'Now that the rehabilitation period is over, are you able to return to work?',
    //   trigger: '54b',
    // },
    {
      id: '54b',
      options: [
        { value: 'yes', label: 'YES, I can', trigger: '55b' },
        { value: 'no', label: 'NO, I cannot', trigger: '58b' },
      ],
    },
    {
      id: '55b',
      message:
        'As rehabilitation may include time off, therapy and accommodated duties at work, you may return to work in a limited or different way until you are healed and able to go back to your regular duties. Once this is the case, your WCB claim will be closed and you can go back to your job.',
      trigger: '29b',
    },
    // {
    //   id: '56b',
    //   message:
    //     'If this is the case, then your WCB claim will be closed and you can go back to your job.',
    //   trigger: '29b',
    // },
    // {
    //   id: '57b',
    //   message: "Let's explore your options.",
    //   trigger: '58b',
    // },
    {
      id: '58b',
      message:
        'Going through the WCB process can be long and exhausting, but there is help. ',
      trigger: '59b',
    },
    {
      id: '59b',
      message:
        'It may be helpful to talk to other workers who have had injuries for support and information. This is highly recommended.',
      trigger: '60b', // add learn more
    },
    // {
    //   id: 'workers compensation act3',
    //   component: (
    //     <InChatRefButton
    //       onPress={() =>
    //         WebBrowser.openBrowserAsync(
    //           'https://www.qp.alberta.ca/1266.cfm?page=W15.cfm&leg_type=Acts&isbncln=9780779814497',
    //         )
    //       }
    //       icon="web"
    //       style={{ width: '85%' }}
    //     >
    //       Workers' Compensation Act
    //     </InChatRefButton>
    //   ),
    //   trigger: '60b',
    // },
    {
      id: '60b',
      message:
        'Some workers say they feel pressure from themselves and others to go back to work. However, you should follow your doctor’s advice and not be pressured into returning too soon.',
      trigger: '61b',
    },
    {
      id: '61b',
      message:
        'The WCB pay is there to ensure that you do not feel financial need to return to work with an injury.',
      trigger: '62b',
    },
    {
      id: '62b',
      message:
        "If you are ever confused or scared during this process, you can get free help through Calgary Workers' Resource Centre by clicking below.",
      trigger: 'workers resource end',
    },
    {
      id: 'workers resource end',
      component: (
        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            borderRadius: 16,
            marginBottom: 16,
            width: '100%',
            shadowColor: colors.black,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.22,
            shadowRadius: 2.2,
            elevation: 3,
          }}
        >
          <View style={{ paddingHorizontal: 24, paddingTop: 24 }}>
            <Subheading>Calgary Workers\' Resource Centre</Subheading>
            <Paragraph>
              Calgary Workers\' Resource Centre provides free case work and a
              public legal education program if you are having issues
              understanding your rights in your workplace.
            </Paragraph>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              backgroundColor: colors.lightGrey,
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              borderTopColor: colors.mediumGrey,
              borderTopWidth: 1,
              borderStyle: 'solid',
            }}
          >
            <RoundButton type="web" target="https://www.helpwrc.org/" />

            <View
              style={{
                borderLeftWidth: 1,
                borderLeftColor: colors.mediumGrey,
              }}
            />
            <RoundButton type="phone" target="+1 403-264-8100" />
          </View>
        </View>
      ),

      trigger: '29b',
    },
    // {
    //   id: '63b',
    //   message:
    //     'As the Workers Compensation Act clearly states that employees cannot be fired due to their injury, there have been cases where employers look for reasons to fire a worker that is non-injury related. ',
    //   trigger: '64b',
    // },
    // {
    //   id: '64b',
    //   message:
    //     'For example, they may look for reasons for firing you. Even though this is illegal, this may happen.',
    //   trigger: '65b',
    // },
    // {
    //   id: '65b',
    //   message:
    //     "Should this happen, you can always contact the Calgary Workers' Resource Centre and Alberta Employment Standards for free help regarding wrongful termination.",
    //   trigger: '66b',
    // },
    // {
    //   id: '66b',
    //   message:
    //     'Would you like to know the contact information of these organizations?',
    //   trigger: '67b',
    // },
    // {
    //   id: '67b',
    //   options: [
    //     {
    //       value: 'yes',
    //       label: 'YES, I would like to know',
    //       trigger: 'resource link',
    //     },
    //     { value: 'no', label: 'NO, I would not', trigger: '43b' },
    //   ],
    // },
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
      trigger: 'restart option c',
    },
    // {
    //   id: '69b',
    //   component: (
    //     //   <View>
    //     //     <Button
    //     //       onPress={() => {
    //     //         navigation.navigate('Reporting & Filing An Injury');
    //     //       }}
    //     //       title="Restart"
    //     //     />
    //     //     <Button
    //     //       onPress={() => {
    //     //         navigation.navigate('Racist Incident');
    //     //       }}
    //     //       title="Racist Incident"
    //     //     />
    //     //     <Button
    //     //       onPress={() => {
    //     //         navigation.navigate('Injury Prevention & Training');
    //     //       }}
    //     //       title="Injury Prevention & Training"
    //     //     />
    //     //     <Button
    //     //       onPress={() => {
    //     //         navigation.navigate('Find Your Voice');
    //     //       }}
    //     //       title="Quit"
    //     //     />
    //     //   </View>
    //     <EndChatReportingCard />
    //   ),
    //   trigger: 'restart option c',
    // },
    {
      id: 'restart option c',
      options: [
        { value: 'A', label: 'Restart', trigger: 'reporting injury' },
        { value: 'B', label: 'Racist Incident', trigger: 'racist incident' },
        {
          value: 'C',
          label: 'Injury Prevention & Training',
          trigger: 'injury prevention',
        },

        { value: 'D', label: 'Quit', trigger: 'end_options' },
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
