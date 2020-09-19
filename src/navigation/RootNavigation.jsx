import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Main from 'screens/Main';

import KnowYourRights from 'screens/KnowYourRights';
import KnowYourRightsTabs from 'screens/KnowYourRights/tabs';
import CovidInfo from 'screens/KnowYourRights/Ohs/CovidInfo';
import BasicRights from 'screens/KnowYourRights/Ohs/BasicRights';
import TypesOfHazards from 'screens/KnowYourRights/Ohs/TypesOfHazards';
import WorkersCompensation from 'screens/KnowYourRights/Ohs/WorkersCompensation';

import FindYourVoice from 'screens/FindYourVoice';

import Resources from 'screens/Resources';
import Disclaimer from 'screens/Disclaimer';
import Glossary from 'screens/Glossary';

import colors from 'config/colors';

const App = createStackNavigator();

const RootNavigation = ({ navigation }) => {
  return (
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
          headerTitle: '',
          headerTransparent: true,
          headerRight: () => (
            <Icon
              name="menu"
              size={24}
              color={colors.primary}
              onPress={() => navigation.toggleDrawer()}
              style={{ marginRight: 16 }}
            />
          ),
        }}
      />
      <App.Screen
        name="Know Your Rights"
        component={KnowYourRights}
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
              onPress={() => {
                navigation.toggleDrawer();
              }}
              style={{ marginRight: 16 }}
            />
          ),
        }}
      />
      <App.Screen
        name="Find Your Voice"
        component={FindYourVoice}
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
        name="Disclaimer"
        component={Disclaimer}
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
      <App.Screen name="Glossary" component={Glossary} />
      <App.Screen
        name="Know Your Rights Tabs"
        component={KnowYourRightsTabs}
        options={{
          headerTitle: 'Know Your Rights',
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
        name="COVID-19 Information"
        component={CovidInfo}
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
        name="Workers' Compensation"
        component={WorkersCompensation}
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
        name="Types of Hazards"
        component={TypesOfHazards}
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
        name="Basic Rights"
        component={BasicRights}
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
};

export default RootNavigation;
