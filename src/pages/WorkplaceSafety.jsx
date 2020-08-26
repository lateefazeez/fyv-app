import React from 'react';
import { View, StyleSheet, Image, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../config/colors';
import SectionTitleText from '../components/SectionTitleText';
import SectionDetailsText from '../components/SectionDetailsText';

const Stack = createStackNavigator();

const WorkplaceSafety = () => (
  <View style={styles.pageContainer}>
    <View style={styles.pageTop}>
      <Image
        style={styles.SectionIcon}
        source={require('../../assets/workplace_safety_icon.png')}
      />
      <SectionTitleText style={styles.sectionTitleText}>
        Workplace Safety
      </SectionTitleText>
    </View>
    <View style={styles.pageBottom}>
      <View style={styles.sectionDetails}>
        <Image
          style={styles.sectionImage}
          source={require('../../assets/workplace_safety.png')}
        />
        <View style={styles.textContainer}>
          <SectionDetailsText style={styles.sectionDetailsText}>
            A safe workplace takes your physical, mental, and emotional safety
            into consideration. {'\n'}
            {'\n'}
            Your Safety at work is protected by 3 pieces of legislatons:
          </SectionDetailsText>
        </View>
      </View>
      <View style={styles.BottomNavigation}></View>
    </View>
  </View>
);

export default WorkplaceSafety;

const styles = StyleSheet.create({
  BottomNavigation: {},
  pageBottom: {
    flex: 1.7,
    width: '100%',
  },
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  pageTop: {
    flex: 1.3,
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
    lineHeight: 25,
  },
  SectionIcon: {
    width: 150,
    height: 150,
    margin: 25,
  },
  sectionImage: {
    width: 140,
    marginRight: 10,
  },
  sectionTitleText: {
    width: 200,
    textAlign: 'center',
  },
  textContainer: {
    width: Platform.OS === 'android' ? 265 : 200,
    alignSelf: 'flex-start',
    paddingRight: Platform.OS === 'android' ? 15 : 0,
  },
});
