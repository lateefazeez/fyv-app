import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

import Main from '../pages/Main';
import WorkplaceSafety from '../pages/WorkplaceSafety';
import Resources from '../pages/Resources';
import FindingYourVoice from '../pages/FindingYourVoice';
import Disclaimers from '../pages/Disclaimers';

import colors from '../config/colors';

const App = createStackNavigator();

const RootNavigation = ({ navigation }) => (
  <App.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.primary },
      headerTintColor: colors.white,
    }}
  >
    <App.Screen
      name="Worker's App"
      component={Main}
      options={{
        headerLeft: () => (
          <Icon
            name="menu"
            size={24}
            color={colors.white}
            onPress={() => navigation.toggleDrawer()}
            style={{ marginLeft: 16 }}
          />
        ),
      }}
    />
    <App.Screen
      name="Workplace Safety"
      component={WorkplaceSafety}
      options={{ headerBackTitle: 'Back' }}
    />
    <App.Screen
      name="Resources"
      component={Resources}
      options={{ headerBackTitle: 'Back' }}
    />
    <App.Screen
      name="Finding Your Voice"
      component={FindingYourVoice}
      options={{ headerBackTitle: 'Back' }}
    />
    <App.Screen
      name="Disclaimers"
      component={Disclaimers}
      options={{ headerBackTitle: 'Back' }}
    />
  </App.Navigator>
);

export default RootNavigation;
