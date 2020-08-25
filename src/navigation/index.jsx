import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';

import MenuDrawerContent from '../pages/MenuDrawerContent';

import Main from '../pages/Main';
import WorkplaceSafety from '../pages/WorkplaceSafety';
import Resources from '../pages/Resources';
import FindingYourVoice from '../pages/FindingYourVoice';
import Disclaimers from '../pages/Disclaimers';

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
    <App.Screen name="Finding Your Voice" component={FindingYourVoice} />
    <App.Screen name="Disclaimers" component={Disclaimers} />
  </App.Navigator>
);

const Drawer = createDrawerNavigator();

const MenuNavigation = () => (
  <Drawer.Navigator drawerContent={() => <MenuDrawerContent />}>
    <Drawer.Screen name="Home" component={HomeNavigation} />
  </Drawer.Navigator>
  // <Drawer.Navigator
  //   drawerStyle={{ backgroundColor: '#fff' }}
  //   overlayColor="rgba(51, 75, 73, 0.8)"
  // >
  //   <Drawer.Screen name="Home" component={HomeNavigation} />
  //   <Drawer.Screen name="Workplace Safety" component={WorkplaceSafety} />
  //   <Drawer.Screen name="Resources" component={Resources} />
  //   <Drawer.Screen name="Finding Your Voice" component={FindingYourVoice} />
  //   <Drawer.Screen name="Disclaimers" component={Disclaimers} />
  // </Drawer.Navigator>
);

export default MenuNavigation;
