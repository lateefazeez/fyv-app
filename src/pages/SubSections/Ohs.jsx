import React from 'react';
import { View, StyleSheet, Platform, Text, SafeAreaView } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Entypo } from '@expo/vector-icons';

import BasicRights from './BasicRights';
import TypesOfHazards from './TypedOfHzards';

import colors from '../../config/colors';
import SectionDetailsText from '../../components/SectionDetailsText';

const Tab = createMaterialTopTabNavigator();

const Ohs = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: colors.white,

          padding: 30,
        }}
      >
        <SectionDetailsText style={styles.sectionDetailsText}>
          Most workers in Alberta are protected under the Alberta Health and
          Safety Act, Regulation and Code. Some workers, such as federal
          workers, live in care-givers, or farm workers may have their own
          separate laws.
          {'\n'}
          {'\n'}
          These laws are the minimum standards for protecting workers, and
          involve both workers and employers.
        </SectionDetailsText>
        <TouchableOpacity
          style={styles.legislationLink}
          onPress={() => console.log('Link Clicked')}
        >
          <Entypo name="link" size={30} color={colors.white} />
          <Text style={{ fontSize: 13, margin: 5, color: colors.white }}>
            View Current Legislation
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
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
  legislationLink: {
    width: 200,
    height: 40,
    backgroundColor: colors.darkGrey,
    marginTop: 10,

    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
    resizeMode: 'contain',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
  },
  sectionDetailsText: {
    alignSelf: 'flex-start',
    lineHeight: Platform.OS === 'android' ? 25 : 22,
    fontSize: Platform.OS === 'android' ? 16 : 15,
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
