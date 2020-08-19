import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

import Main from './pages/Main';
import WorkplaceSafety from './pages/WorkplaceSafety';
import Resources from './pages/Resources';
import FindingYourVoice from './pages/FindingYourVoice';
import Disclaimers from './pages/Disclaimers';

const App = createStackNavigator();


const Routes = () => (
  <App.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#129C96' },
      headerTintColor: '#fff',
    }}
  >
    <App.Screen name="Main Screen" component={Main}>
    <App.Screen name="Workplace Safety" component={WorkplaceSafety} />
    <App.Screen name="Resources" component={Resources} />
    <App.Screen name="Finding Your Voice" component={FindingYourVoice} />
    <App.Screen name="Disclaimers" component={Disclaimers} />
  </App.Navigator>
);

export default Routes;
