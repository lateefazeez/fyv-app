import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import ViewPager from '@react-native-community/viewpager';

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

          <TouchableOpacity
            style={styles.legislationLink}
            onPress={() => console.log('Link Clicked')}
          >
            <Entypo name="link" size={30} color={colors.white} />
            <Text style={{ fontSize: 13, margin: 5, color: colors.white }}>
              Read More
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              padding: 5,
              margin: 10,
            }}
          >
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <Text>Swipe</Text>
              <View style={{ justifyContent: 'flex-end', marginLeft: 70 }}>
                <AntDesign name="right" size={20} color="black" />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.page} key="2">
          <Text style={styles.sectionDetailsText}>Right to</Text>
          <Text style={styles.mainDetailsText}>KNOW</Text>

          <Text
            style={{
              textAlign: 'center',
              paddingTop: 15,
              color: colors.faintText,
            }}
          >
            about the dangers of our jobs and how we
            {'\n'}
            are protected
          </Text>

          <TouchableOpacity
            style={styles.legislationLink}
            onPress={() => console.log('Link Clicked')}
          >
            <Entypo name="link" size={30} color={colors.white} />
            <Text style={{ fontSize: 13, margin: 5, color: colors.white }}>
              Read More
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              padding: 5,
              margin: 10,
            }}
          >
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <View style={{ justifyContent: 'flex-end', marginRight: 120 }}>
                <AntDesign name="left" size={20} color="black" />
              </View>
              <Text>Swipe</Text>
              <View style={{ justifyContent: 'flex-end', marginLeft: 120 }}>
                <AntDesign name="right" size={20} color="black" />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.page} key="3">
          <Text style={styles.sectionDetailsText}>Right to</Text>
          <Text style={styles.mainDetailsText}>PARTICIPATE</Text>

          <Text
            style={{
              textAlign: 'center',
              paddingTop: 15,
              color: colors.faintText,
            }}
          >
            in activities affecting our
            {'\n'}
            Health and Safety
          </Text>

          <TouchableOpacity
            style={styles.legislationLink}
            onPress={() => console.log('Link Clicked')}
          >
            <Entypo name="link" size={30} color={colors.white} />
            <Text style={{ fontSize: 13, margin: 5, color: colors.white }}>
              Read More
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              padding: 5,
              margin: 10,
            }}
          >
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <View style={{ justifyContent: 'flex-end', marginRight: 120 }}>
                <AntDesign name="left" size={20} color="black" />
              </View>
              <Text>Swipe</Text>
              <View style={{ justifyContent: 'flex-end', marginLeft: 120 }}>
                <AntDesign name="right" size={20} color="black" />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.page} key="4">
          <Text style={styles.sectionDetailsText}>Right to</Text>
          <Text style={styles.mainDetailsText}>REFUSE WORKS</Text>

          <Text
            style={{
              textAlign: 'center',
              paddingTop: 15,
              color: colors.faintText,
            }}
          >
            we feel may be dangerous to ourselves or
            {'\n'}
            others
          </Text>

          <TouchableOpacity
            style={styles.legislationLink}
            onPress={() => console.log('Link Clicked')}
          >
            <Entypo name="link" size={30} color={colors.white} />
            <Text style={{ fontSize: 13, margin: 5, color: colors.white }}>
              Read More
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              padding: 5,
              margin: 10,
            }}
          >
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
            >
              <View style={{ justifyContent: 'flex-end', marginRight: 80 }}>
                <AntDesign name="left" size={20} color="black" />
              </View>
              <Text>Swipe</Text>
            </View>
          </View>
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
