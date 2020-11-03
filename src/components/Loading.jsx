import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import colors from 'config/colors.json';

function Loading() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator animating color={colors.primary} />
    </View>
  );
}

export default Loading;
