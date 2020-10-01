import React from 'react';
import ChatBot from 'react-native-chatbot-expo';
import { Asset } from 'expo-asset';

import colors from 'config/colors.json';

console.disableYellowBox = true;

const FyvChatBot = ({ steps, handleEnd, ...props }) => {
  return (
    <ChatBot
      {...props}
      handleEnd={handleEnd}
      steps={steps}
      userAvatar={Asset.fromModule(require('assets/icons/user.png')).uri}
      botAvatar={Asset.fromModule(require('assets/icons/bot.png')).uri}
      // handleEnd={handleEnd}
      userDelay={200}
      botDelay={1000}
      customDelay={200}
      contentStyle={{
        paddingTop: 8,
        backgroundColor: '#eee',
      }}
      scrollViewProps={{}}
      customStyle={{
        backgroundColor: 'none',
        borderWidth: 0,
        marginLeft: 43,
      }}
      bubbleStyle={{
        backgroundColor: colors.primary,
      }}
      optionElementStyle={{
        backgroundColor: colors.fabButton,
        padding: 20,
        marginLeft: 50,
        borderRadius: 30,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: colors.primary,
      }}
      footerStyle={{ position: 'absolute', bottom: -100 }}
    />
  );
};

export default FyvChatBot;
