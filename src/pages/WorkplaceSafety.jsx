import React from 'react';
import { View, StyleSheet, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Title,
  Paragraph,
  Button,
  Subheading,
  Divider,
} from 'react-native-paper';

import colors from '../config/colors';
import sectionIcon from '../../assets/workplace_safety_icon.png';
import contentImageLeft from '../../assets/workplace_safety.png';
import contentImageRight from '../../assets/group_392.png';

const WorkplaceSafety = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pageContainer}>
      <View style={styles.pageHeader}>
        <Image style={styles.sectionIcon} source={sectionIcon} />

        <View style={styles.sectionIconLabel}>
          <Title>Workplace Safety</Title>
          <Subheading>We can add something useful here...</Subheading>
        </View>
      </View>

      <View style={styles.pageMainContent}>
        <View style={styles.contentDetails}>
          <Image style={styles.contentImageLeft} source={contentImageLeft} />

          <Paragraph style={styles.contentText}>
            A safe workplace takes your physical, mental, and emotional safety
            into consideration.
            {'\n'}
            {'\n'}
            Your Safety at work is protected by 3 pieces of legislatons:
          </Paragraph>
          <Image style={styles.contentImageRight} source={contentImageRight} />
        </View>
        <View style={styles.BottomNavigation}>
          <Button
            style={styles.navigationButton}
            mode="contained"
            theme={{ roundness: 5 }}
            color={colors.primary}
            onPress={() => {
              navigation.navigate('Workplace Safety Tabs', {
                screen: 'OHS',
              });
            }}
          >
            Occupational Health and Safety
          </Button>
          <Button
            style={styles.navigationButton}
            mode="contained"
            theme={{ roundness: 5 }}
            color={colors.primary}
            onPress={() => {
              navigation.navigate('Workplace Safety Tabs', {
                screen: 'Human Rights',
              });
            }}
          >
            Human Rights
          </Button>
          <Button
            style={styles.navigationButton}
            mode="contained"
            theme={{ roundness: 5 }}
            color={colors.primary}
            onPress={() => {
              navigation.navigate('Workplace Safety Tabs', {
                screen: 'Employment Standards',
              });
            }}
          >
            Employment Standards
          </Button>
        </View>
      </View>
    </View>
  );
};

export default WorkplaceSafety;

const styles = StyleSheet.create({
  BottomNavigation: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 32,
    paddingBottom: 32,
    paddingTop: 16,
    position: 'relative',
  },
  pageMainContent: {
    justifyContent: 'space-evenly',
    position: 'relative',
    flexGrow: 1,
  },
  pageContainer: {
    flex: 1,
  },
  pageHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
  },
  contentImageLeft: {},
  contentImageRight: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  contentDetails: {
    backgroundColor: colors.pageDetailsBackground,
    padding: 32,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexGrow: 1,
  },
  contentText: {
    alignSelf: 'center',
    marginTop: 32,
  },
  sectionIcon: {
    width: 64,
    height: 64,
  },
  sectionIconLabel: {
    flexDirection: 'column',
    flexGrow: 1,
    marginLeft: 16,
  },
  navigationButton: {
    marginTop: 16,
  },
});
