import React from 'react';
import { View, StyleSheet, Image, Platform, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../config/colors';
import SectionTitleText from '../components/SectionTitleText';
import SectionDetailsText from '../components/SectionDetailsText';
import SubSectionNavButton from '../components/SubSectionNavButton';

const WorkplaceSafety = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pageContainer}>
      <View style={styles.pageTop}>
        <Button
          onPress={() => {
            console.log('click');
            navigation.navigate('Workplace Safety Tabs');
          }}
          title="Test Tabs"
        />
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
              into consideration.
{' '}
{'\n'}
              {'\n'}
              Your Safety at work is protected by 3 pieces of legislatons:
            </SectionDetailsText>
            <Image
              style={styles.rock}
              source={require('../../assets/group_392.png')}
            />
          </View>
        </View>
        <View style={styles.BottomNavigation}>
          <SubSectionNavButton style={styles.navButton}>
            OHS
          </SubSectionNavButton>
          <SubSectionNavButton style={styles.navButton}>
            Human Rights
          </SubSectionNavButton>
          <SubSectionNavButton style={styles.navButton}>
            Employment Standards
          </SubSectionNavButton>
        </View>
      </View>
    </View>
  );
};

export default WorkplaceSafety;

const styles = StyleSheet.create({
  BottomNavigation: {
    width: '100%',
    height: 160,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
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
  rock: {
    width: 60,
    height: 20,
    alignSelf: 'flex-end',
    marginTop: Platform.OS === 'android' ? 10 : 20,
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
    paddingRight: Platform.OS === 'android' ? 20 : 0,
  },
});
