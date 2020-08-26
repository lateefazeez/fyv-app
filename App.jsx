import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import colors from './src/config/colors';
import DrawerNavigation from './src/navigation/DrawerNavigation';

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusBar} />
      <DrawerNavigation />
    </NavigationContainer>
  );
}

export default App;
