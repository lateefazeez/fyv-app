import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Ohs from './SubSections/Ohs';
import HumanRights from './SubSections/HumanRights';
import EmploymentStandards from './SubSections/EmploymentStandards';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="OHS" component={Ohs} />
      <Tab.Screen name="Human Rights" component={HumanRights} />
      <Tab.Screen name="Employment Standards" component={EmploymentStandards} />
    </Tab.Navigator>
  );
}
