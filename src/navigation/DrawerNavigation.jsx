import React, { useRef } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigation from './RootNavigation';
import MenuDrawerContent from '../pages/MenuDrawerContent';

import colors from '../config/colors';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const navRef = useRef(null);

  return (
    <>
      <NavigationContainer ref={navRef}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.statusBar}
        />
        <Drawer.Navigator
          drawerContent={props => <MenuDrawerContent {...props} />}
        >
          <Drawer.Screen name="Root" component={RootNavigation} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default DrawerNavigation;
