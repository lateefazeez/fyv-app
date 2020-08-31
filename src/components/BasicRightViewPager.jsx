import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import TouchableOpacity from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';

import colors from '../config/colors';

const BasicRightViewPager = () => {
  return (
    <View style={{ flex: 1 }}>
      <ViewPager style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
          <Text style={styles.sectionDetailsText}>Right to</Text>
          <Text style={styles.mainDetailsText}>BE FREE FROM</Text>
          <Text
            style={styles.reprisal}
            onPress={() => console.log('Reprisal Clicked')}
          >
            REPRISAL
          </Text>
          <Text
            style={{
              textAlign: 'center',
              paddingTop: 15,
              color: colors.faintText,
            }}
          >
            (disciplined or fired) for using our Health
            {'\n'}
            and Safety rights
          </Text>
          <TouchableOpacity>
            <View
              style={styles.legislationLink}
              onPress={() => console.log('Link Clicked')}
            >
              <Entypo name="link" size={30} color={colors.white} />
              <Text style={{ fontSize: 13, margin: 5, color: colors.white }}>
                Read More
              </Text>
            </View>
          </TouchableOpacity>

          <View style={{ flex: 1, justifyContent: 'flex-end', padding: 5 }}>
            <Text>Swipe ➡️</Text>
          </View>
        </View>
        <View style={styles.page} key="2">
          <Text>Second page</Text>
        </View>
        <View style={styles.page} key="3">
          <Text>Third page</Text>
        </View>
      </ViewPager>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  sectionDetailsText: {
    lineHeight: Platform.OS === 'android' ? 25 : 22,
    fontSize: Platform.OS === 'android' ? 16 : 15,
  },
  mainDetailsText: {
    fontWeight: 'bold',
    fontSize: Platform.OS === 'android' ? 37 : 35,
  },
  reprisal: {
    color: colors.primary,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: Platform.OS === 'android' ? 37 : 35,
  },
  legislationLink: {
    width: 120,
    height: 40,
    backgroundColor: colors.darkGrey,
    marginTop: 30,

    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
  },
});

export default BasicRightViewPager;
