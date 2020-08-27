import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

import Main from '../pages/Main';
import WorkplaceSafety from '../pages/WorkplaceSafety';
import Resources from '../pages/Resources';
import FindingYourVoice from '../pages/FindingYourVoice';
import Disclaimers from '../pages/Disclaimers';
import Ohs from '../pages/SubSections/Ohs';
import HumanRights from '../pages/SubSections/HumanRights';
import EmploymentStandards from '../pages/SubSections/EmploymentStandards';

import colors from '../config/colors';

const App = createStackNavigator();

const RootNavigation = ({ navigation }) => (
  <App.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: { backgroundColor: colors.primary },
      headerTintColor: colors.white,
    }}
  >
    <App.Screen
      name="Home"
      component={Main}
      options={{
        headerRight: () => (
          <Icon
            name="menu"
            size={24}
            color={colors.white}
            onPress={() => navigation.toggleDrawer()}
            style={{ marginRight: 16 }}
          />
        ),
      }}
    />
    <App.Screen
      name="Workplace Safety"
      component={WorkplaceSafety}
      options={{
        headerBackTitle: 'Back',
        headerRight: () => (
          <Icon
            name="menu"
            size={24}
            color={colors.white}
            onPress={() => navigation.toggleDrawer()}
            style={{ marginRight: 16 }}
          />
        ),
      }}
    />
    <App.Screen
      name="Resources"
      component={Resources}
      options={{
        headerBackTitle: 'Back',
        headerRight: () => (
          <Icon
            name="menu"
            size={24}
            color={colors.white}
            onPress={() => navigation.toggleDrawer()}
            style={{ marginRight: 16 }}
          />
        ),
      }}
    />
    <App.Screen
      name="Finding Your Voice"
      component={FindingYourVoice}
      options={{
        headerBackTitle: 'Back',
        headerRight: () => (
          <Icon
            name="menu"
            size={24}
            color={colors.white}
            onPress={() => navigation.toggleDrawer()}
            style={{ marginRight: 16 }}
          />
        ),
      }}
    />
    <App.Screen
      name="Disclaimers"
      component={Disclaimers}
      options={{
        headerBackTitle: 'Back',
        headerRight: () => (
          <Icon
            name="menu"
            size={24}
            color={colors.white}
            onPress={() => navigation.toggleDrawer()}
            style={{ marginRight: 16 }}
          />
        ),
      }}
    />
    <App.Screen
      name="OHS"
      component={Ohs}
      options={{
        title: 'Occupational Health',
        headerBackTitle: 'Back',
        headerRight: () => (
          <Icon
            name="menu"
            size={24}
            color={colors.white}
            onPress={() => navigation.toggleDrawer()}
            style={{ marginRight: 16 }}
          />
        ),
      }}
    />

    <App.Screen
      name="Human Rights"
      component={HumanRights}
      options={{
        headerBackTitle: 'Back',
        headerRight: () => (
          <Icon
            name="menu"
            size={24}
            color={colors.white}
            onPress={() => navigation.toggleDrawer()}
            style={{ marginRight: 16 }}
          />
        ),
      }}
    />

    <App.Screen
      name="Employment Standards"
      component={EmploymentStandards}
      options={{
        headerBackTitle: 'Back',
        headerRight: () => (
          <Icon
            name="menu"
            size={24}
            color={colors.white}
            onPress={() => navigation.toggleDrawer()}
            style={{ marginRight: 16 }}
          />
        ),
      }}
    />
  </App.Navigator>
);

export default RootNavigation;
