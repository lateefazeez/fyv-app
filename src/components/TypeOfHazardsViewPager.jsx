/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
// eslint-disable-next-line import/no-unresolved
import ViewPager from '@react-native-community/viewpager';

import colors from '../config/colors';
import PsychosocialImage from '../../assets/psychosocial_image.png';
import BiologicalImage from '../../assets/suit.png';
import PhysicalImage from '../../assets/man.png';
// import ChemicalImage from '../../assets/chemical_image.png';

const TypeOfHazardsViewPager = () => {
  return (
    <View style={{ flex: 1 }}>
      <ViewPager style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
          <View style={styles.imageContainer}>
            <Image style={styles.pageImage} source={PsychosocialImage} />
          </View>
          <Text style={styles.mainDetailsText}>
            Psychosocial
            {'\n'}
            {' '}
            Hazards
            {' '}
          </Text>
          <View style={{ padding: 20 }}>
            <Text style={styles.sectionDetailsText}>
              Psychosocial hazards may include stress, violence, prevention,
              bullying, mental health, aging workers, and many more.
            </Text>
          </View>

          <TouchableOpacity
            style={styles.legislationLink}
            // eslint-disable-next-line no-console
            onPress={() => console.log('Link Clicked')}
          >
            <Entypo name="link" size={30} color={colors.white} />
            <Text style={{ fontSize: 13, margin: 5, color: colors.white }}>
              Read More
            </Text>
          </TouchableOpacity>

          <View
            style={{
              justifyContent: 'flex-end',
              padding: 5,
              margin: 10,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}
            >
              <Text>Swipe</Text>
              <View style={{ justifyContent: 'flex-end', marginLeft: 50 }}>
                <AntDesign name="right" size={20} color="black" />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.page} key="2">
          <View style={styles.imageContainer}>
            <Image style={styles.pageImage} source={BiologicalImage} />
          </View>
          <Text style={styles.mainDetailsText}>
            Biological
            {'\n'}
            Hazards
          </Text>

          <View style={{ padding: 20 }}>
            <Text style={styles.sectionDetailsText}>
              Sources of biological hazards may include bacteria, viruses,
              insects, plants, birds, animals, and humans. These sources can
              cause a variety of health effects ranging from skin irritation and
              allergies to infections (e.g., tuberculosis, AIDS), cancer and so
              on.
            </Text>
          </View>
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
              justifyContent: 'flex-end',
              padding: 5,
              margin: 10,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <View style={{ justifyContent: 'flex-end', marginRight: 100 }}>
                <AntDesign name="left" size={20} color="black" />
              </View>
              <Text>Swipe</Text>
              <View style={{ justifyContent: 'flex-end', marginLeft: 100 }}>
                <AntDesign name="right" size={20} color="black" />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.page} key="3">
          <View style={styles.imageContainer}>
            <Image style={styles.pageImage} source={PhysicalImage} />
          </View>
          <Text style={styles.mainDetailsText}>
            Physical
            {'\n'}
            Hazards
          </Text>

          <View style={{ padding: 20 }}>
            <Text style={styles.sectionDetailsText}>
              Physical hazards are sources of energy that may cause injury or
              disease. Examples include noise, vibration, radiation, and
              extremes in temperature.
            </Text>
          </View>
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
              <View style={{ justifyContent: 'flex-end', marginRight: 100 }}>
                <AntDesign name="left" size={20} color="black" />
              </View>
              <Text>Swipe</Text>
              <View style={{ justifyContent: 'flex-end', marginLeft: 100 }}>
                <AntDesign name="right" size={20} color="black" />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.page} key="4">
          <View style={styles.imageContainer}>
            <Image style={styles.pageImage} source={PhysicalImage} />
          </View>
          <Text style={styles.mainDetailsText}>
            Chemical
            {'\n'}
            Hazards
          </Text>

          <View style={{ padding: 20 }}>
            <Text style={styles.sectionDetailsText}>
              Chemical effects will depend on the physical, chemical, and toxic
              properties of the chemical.
            </Text>
          </View>
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
              <View style={{ justifyContent: 'flex-start', marginLeft: 0 }}>
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
  imageContainer: {
    width: 250,
    height: 250,
    backgroundColor: colors.lightGrey,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  pageImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  page: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  sectionDetailsText: {
    alignSelf: 'flex-start',
    lineHeight: Platform.OS === 'android' ? 25 : 22,
    fontSize: Platform.OS === 'android' ? 16 : 15,
  },
  mainDetailsText: {
    fontWeight: 'bold',
    fontSize: Platform.OS === 'android' ? 20 : 20,
    textAlign: 'center',
    margin: 20,
  },
  legislationLink: {
    width: 120,
    height: 40,
    backgroundColor: colors.darkGrey,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
    margin: 20,
  },
});

export default TypeOfHazardsViewPager;
