import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';

import MenuDrawerContent from 'screens/MenuDrawerContent';

import Main from 'screens/Main';
import WorkplaceSafety from 'screens/WorkplaceSafety';
import Resources from 'screens/Resources';
import FindYourVoice from 'screens/FindYourVoice';
import Disclaimers from 'screens/Disclaimers';
import Glossary from 'screens/Glossary';

const App = createStackNavigator();

const HomeNavigation = ({ navigation }) => (
  <App.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#129C96' },
      headerTintColor: '#fff',
    }}
  >
    <App.Screen
      name="Worker's App"
      component={Main}
      options={{
        headerRight: () => (
          <Icon
            name="menu"
            size={24}
            color="#fff"
            onPress={() => navigation.toggleDrawer()}
            style={{ marginRight: 16 }}
          />
        ),
      }}
    />
    <App.Screen name="Workplace Safety" component={WorkplaceSafety} />
    <App.Screen name="Resources" component={Resources} />
    <App.Screen name="Find Your Voice" component={FindYourVoice} />
    <App.Screen name="Disclaimers" component={Disclaimers} />
    <App.Screen name="Glossary" component={Glossary} />
  </App.Navigator>
);

const Drawer = createDrawerNavigator();

const MenuNavigation = () => (
  <Drawer.Navigator drawerContent={props => <MenuDrawerContent {...props} />}>
    <Drawer.Screen name="Home" component={HomeNavigation} />
  </Drawer.Navigator>
  // <Drawer.Navigator
  //   drawerStyle={{ backgroundColor: '#fff' }}
  //   overlayColor="rgba(51, 75, 73, 0.8)"
  // >
  //   <Drawer.Screen name="Home" component={HomeNavigation} />
  //   <Drawer.Screen name="Workplace Safety" component={WorkplaceSafety} />
  //   <Drawer.Screen name="Resources" component={Resources} />
  //   <Drawer.Screen name="Finding Your Voice" component={FindYourVoice} />
  //   <Drawer.Screen name="Disclaimers" component={Disclaimers} />
  // </Drawer.Navigator>
);

export default MenuNavigation;
