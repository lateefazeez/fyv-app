import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import FloatingButtonFYV from 'components/FloatingButtonFYV';

import colors from 'config/colors.json';

import Ohs from './Ohs';
import HumanRights from './HumanRights';
import EmploymentStandards from './EmploymentStandards';

const Tab = createMaterialTopTabNavigator();

const KnowYourRightsTabs = () => (
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
      <Tab.Screen name="Employment Standards" component={EmploymentStandards} />
      <Tab.Screen name="Human Rights" component={HumanRights} />
    </Tab.Navigator>
    <FloatingButtonFYV />
  </>
);

export default KnowYourRightsTabs;
