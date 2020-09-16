import * as React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-paper';

import colors from '../config/colors';

const EndChatReportingCard = () => (
  <Card style={{ flex: 1, borderRadius: 17, width: '95%' }}>
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 10,
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 13, lineHeight: 17, color: colors.primary }}>
          A. Restart
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
          B. Injury Prevention & Training
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
          C. Racist Incident
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
          D. Quit
        </Text>
      </View>
    </View>
  </Card>
);

export default EndChatReportingCard;
