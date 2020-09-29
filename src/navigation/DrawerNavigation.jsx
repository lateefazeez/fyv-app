import React, { useRef } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import MenuDrawer from 'screens/MenuDrawer';

import colors from 'config/colors.json';
import RootNavigation from './RootNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const routeNameRef = useRef(null);
  const navigationRef = useRef(null);

  return (
    <>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current = navigationRef.current.getCurrentRoute().name;
        }}
        onStateChange={() => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName = navigationRef.current.getCurrentRoute().name;

          if (previousRouteName !== currentRouteName) {
            console.log('Current Screen: ', currentRouteName);
          }

          routeNameRef.current = currentRouteName;
        }}
      >
        {Platform.OS === 'android' ? (
          <StatusBar style="light" backgroundColor={colors.statusBar} />
        ) : (
          <StatusBar style="auto" />
        )}
        <Drawer.Navigator
          drawerStyle={{
            backgroundColor: undefined,
            width: '80%',
            maxWidth: 320,
          }}
          drawerContent={props => <MenuDrawer {...props} />}
        >
          <Drawer.Screen name="Root" component={RootNavigation} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default DrawerNavigation;
