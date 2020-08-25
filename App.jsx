import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import colors from './src/config/colors';
import MenuNavigation from './src/navigation';

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" style={styles.statusBar} />
      <MenuNavigation />
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: colors.statusBar,
  },
});
