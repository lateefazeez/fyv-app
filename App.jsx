import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import colors from './src/config/colors';
import MenuNavigation from './src/navigation';

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusBar} />
      <MenuNavigation />
    </NavigationContainer>
  );
}

export default App;
