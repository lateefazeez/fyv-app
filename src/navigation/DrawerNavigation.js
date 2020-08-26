import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import RootNavigation from './RootNavigation';
import MenuDrawerContent from '../pages/MenuDrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator drawerContent={props => <MenuDrawerContent {...props} />}>
    <Drawer.Screen name="Root" component={RootNavigation} />
  </Drawer.Navigator>
);

export default DrawerNavigation;
