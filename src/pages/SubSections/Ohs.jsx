import React from 'react';
import { View, StyleSheet, Platform, Text, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import BasicRights from './BasicRights';
import TypesOfHazards from './TypedOfHzards';

import colors from '../../config/colors';

const Tab = createMaterialTopTabNavigator();

const Ohs = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.white,
          height: 400,
        }}
      >
        <Text>OHS Screen</Text>
      </View>
      <View style={{ height: 400 }}>
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: {
              fontSize: 13,
              fontWeight: 'bold',
            },
            activeTintColor: colors.primary,
            inactiveTintColor: colors.darkGrey,
            indicatorStyle: {
              backgroundColor: colors.primary,
            },
            style: {
              backgroundColor: colors.lightGrey,
            },
          }}
        >
          <Tab.Screen name="Basic Rights" component={BasicRights} />
          <Tab.Screen name="Types of Hazards" component={TypesOfHazards} />
        </Tab.Navigator>
      </View>
    </ScrollView>
  </SafeAreaView>
);

export default Ohs;

const styles = StyleSheet.create({
  BottomNavigation: {
    width: '100%',
    height: 160,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: 5,
  },

  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 105,
    height: 60,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 30,
  },
  ohsButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 105,
    height: 60,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 30,
    backgroundColor: colors.primary,
  },
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  sectionDetails: {
    width: '100%',
    height: 230,
    backgroundColor: colors.pageDetailsBackground,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  sectionDetailsText: {
    marginTop: 30,
    alignSelf: 'flex-start',
    lineHeight: Platform.OS === 'android' ? 25 : 22,
  },
  sectionTitleText: {
    width: 200,
    textAlign: 'center',
  },
  textContainer: {
    width: Platform.OS === 'android' ? 265 : 200,
    alignSelf: 'flex-start',
    paddingRight: Platform.OS === 'android' ? 20 : 0,
  },
});
