import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MenuNavigation from './src/navigation';

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#334B49" />
      <MenuNavigation />
    </NavigationContainer>
  );
}

export default App;
