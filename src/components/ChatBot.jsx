import React from 'react';
import ChatBot from 'react-native-chatbot-expo';

import colors from 'config/colors.json';

console.disableYellowBox = true;

const FyvChatBot = ({ steps, handleEnd, ...props }) => {
  return (
    <ChatBot
      {...props}
      steps={steps}
      userAvatar="https://i.ibb.co/yVfjxZ1/user-icon.png"
      botAvatar="https://i.ibb.co/9Nz0rZb/logo-green-icon.png"
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
      bubbleStyle={{ backgroundColor: colors.primary }}
      optionElementStyle={{
        backgroundColor: colors.fabButton,
        padding: 20,
        marginLeft: 50,

        borderRadius: 10,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      footerStyle={{ position: 'absolute', bottom: -100 }}
    />
  );
};

export default FyvChatBot;
