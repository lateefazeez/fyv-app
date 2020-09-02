import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Ohs from './SubSections/Ohs';
import HumanRights from './SubSections/HumanRights';
import EmploymentStandards from './SubSections/EmploymentStandards';
import colors from '../config/colors';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 13,
          fontWeight: 'bold',
        },
        activeTintColor: colors.primary,
        inactiveTintColor: '#a6a8ab',
        indicatorStyle: {
          backgroundColor: colors.primary,
        },
        style: {
          backgroundColor: colors.white,
        },
      }}
    >
      <Tab.Screen name="OHS" component={Ohs} />
      <Tab.Screen name="Human Rights" component={HumanRights} />
      <Tab.Screen name="Employment Standards" component={EmploymentStandards} />
    </Tab.Navigator>
  );
}
