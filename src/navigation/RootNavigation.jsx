import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';
import Fa5Icon from 'react-native-vector-icons/FontAwesome5';
import { View } from 'react-native';
import { Title } from 'react-native-paper';

import Main from '../pages/Main';
import WorkplaceSafety from '../pages/WorkplaceSafety';
import Resources from '../pages/Resources';
import FindingYourVoice from '../pages/FindingYourVoice';
import Disclaimers from '../pages/Disclaimers';
import WorkplaceSafetyTabs from '../pages/WorkplaceSafetyTabs';

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
        headerTitle: () => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              color: colors.white,
            }}
          >
            <Fa5Icon
              name="hard-hat"
              size={24}
              color={colors.white}
              style={{ marginRight: 16 }}
            />
            <Title
              style={{
                color: colors.white,
              }}
            >
              Workplace Safety
            </Title>
          </View>
        ),
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
      name="Workplace Safety Tabs"
      component={WorkplaceSafetyTabs}
      options={{
        headerTitle: () => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              color: colors.white,
            }}
          >
            <Fa5Icon
              name="hard-hat"
              size={24}
              color={colors.white}
              style={{ marginRight: 16 }}
            />
            <Title
              style={{
                color: colors.white,
              }}
            >
              Workplace Safety
            </Title>
          </View>
        ),
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
