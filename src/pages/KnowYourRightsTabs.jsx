import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';

import FloatingButton from '../components/FloatingButton';

import Ohs from './SubSections/Ohs';
import HumanRights from './SubSections/HumanRights';
import EmploymentStandards from './SubSections/EmploymentStandards';
import colors from '../config/colors';
import WorkersCompensation from './SubSections/WorkersCompensation';

const Tab = createMaterialTopTabNavigator();

const KnowYourRightsTabs = () => {
  const navigation = useNavigation();

  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
          activeTintColor: colors.primary,
          inactiveTintColor: colors.darkGrey,
          indicatorStyle: {
            backgroundColor: colors.primary,
          },
          style: {
            backgroundColor: colors.white,
          },
        }}
      >
        <Tab.Screen
          name="OHS"
          component={Ohs}
          options={{ title: 'Occupational Health & Safety' }}
        />
        <Tab.Screen
          name="Employment Standards"
          component={EmploymentStandards}
        />
        <Tab.Screen name="Human Rights" component={HumanRights} />
      </Tab.Navigator>
      <FloatingButton onPress={() => navigation.navigate('Find Your Voice')} />
    </>
  );
};

export default KnowYourRightsTabs;
