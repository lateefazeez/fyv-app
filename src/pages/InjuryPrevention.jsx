import React from 'react';
import { SafeAreaView } from 'react-native';
import ChatBot from 'react-native-chatbot';

const steps = [
  {
    id: '1',
    message:
      'One day, you come into work and when you arrive,  your supervisor asks you to do a task you were not trained to do.',
    trigger: '2',
  },
  {
    id: '2',
    message: 'Do you do it?',
    end: true,
  },
];

const InjuryPrevention = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      }}
    >
      <ChatBot steps={steps} />
    </SafeAreaView>
  );
};
export default InjuryPrevention;
