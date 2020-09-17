import React, { useRef } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';

import MenuDrawer from 'screens/MenuDrawer';

import colors from 'config/colors';
import RootNavigation from './RootNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const navRef = useRef(null);

  return (
    <>
      <NavigationContainer ref={navRef}>
        {Platform.OS === 'android' ? (
          <StatusBar style="light" backgroundColor={colors.statusBar} />
        ) : (
          <StatusBar style="auto" />
        )}
        <Drawer.Navigator
          drawerContent={props => <MenuDrawer {...props} />}
          drawerStyle={{
            backgroundColor: colors.white,
            borderTopRightRadius: 32,
            borderBottomRightRadius: 32,
            marginTop: Constants.statusBarHeight,
          }}
        >
          <Drawer.Screen name="Root" component={RootNavigation} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default DrawerNavigation;
