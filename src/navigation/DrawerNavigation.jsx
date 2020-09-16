import React, { useRef } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigation from './RootNavigation';
import MenuDrawer from 'screens/MenuDrawer';

import colors from 'config/colors';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const navRef = useRef(null);

  return (
    <>
      <NavigationContainer ref={navRef}>
        <StatusBar style="light" backgroundColor={colors.statusBar} />
        <Drawer.Navigator
          drawerContent={props => <MenuDrawer {...props} />}
        >
          <Drawer.Screen name="Root" component={RootNavigation} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default DrawerNavigation;
