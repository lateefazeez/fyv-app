import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

import Main from '../pages/Main';
import KnowYourRights from '../pages/KnowYourRights';
import Resources from '../pages/Resources';
import FindingYourVoice from '../pages/FindingYourVoice';
import Disclaimer from '../pages/Disclaimer';
import KnowYourRightsTabs from '../pages/KnowYourRightsTabs';
import CovidInfo from '../pages/CovidInfo';
import TypesOfHazards from '../pages/TypesOfHazards';
import BasicRights from '../pages/BasicRights';
import InjuryPrevention from '../pages/InjuryPrevention';

import colors from '../config/colors';
import ReportingAnInjury from '../pages/ReportingAnInjury';
import RacistIncident from '../pages/RacistIncident';
import WorkersCompensation from '../pages/SubSections/WorkersCompensation';

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
    <App.Screen
      name="Injury Prevention & Training"
      component={InjuryPrevention}
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
      name="Racist Incident"
      component={RacistIncident}
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
      name="Reporting & Filing An Injury"
      component={ReportingAnInjury}
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
