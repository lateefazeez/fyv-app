import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Ohs from './subSections/Ohs';
import HumanRights from './subSections/HumanRights';
import EmploymentStandards from './subSections/EmploymentStandards';

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
