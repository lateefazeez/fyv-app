import React, { useRef } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import FloatingButton from '../components/FindingYourVoiceFloatingButton';
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
      <FloatingButton
        onPress={() =>
          navRef.current && navRef.current.navigate('Finding Your Voice')
        }
      />
    </>
  );
};

export default DrawerNavigation;
