import * as React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-paper';

import colors from '../config/colors';
import { injuryPrevention } from '../pages/FindYourVoice';

//const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

const InChatCard = () => (
  <Card style={{ flex: 1, borderRadius: 17, width: '95%' }}>
    <View style={{ flex: 1 }}>
      <View style={{ padding: 14 }}>
        <Text style={{ fontSize: 13, lineHeight: 17 }}>
          Which topic would you like to know more about: Injury Prevention &
          Training, Racist Incident, or Reporting & Filing an Injury?
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
        <Text style={{ fontSize: 13, lineHeight: 17, color: colors.primary }}>
          A. Injury Prevention & Training
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
        <Text style={{ fontSize: 13, lineHeight: 17, color: colors.primary }}>
          B. Racist Incident
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
        <Text style={{ fontSize: 13, lineHeight: 17, color: colors.primary }}>
          C. Reporting & Filing an Injury
        </Text>
      </View>
    </View>
  </Card>
);

export default InChatCard;
