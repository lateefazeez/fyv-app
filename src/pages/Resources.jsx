import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Linking,
  Text,
  SafeAreaView,
} from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import { Paragraph, Subheading } from 'react-native-paper';
import { FontAwesome, SimpleLineIcons } from '@expo/vector-icons';
import call from 'react-native-phone-call';

import ResourcesImage from '../../assets/resources_icon.png';
import AppText from '../components/AppText';

import colors from '../config/colors';

const CallAlberta = {
  number: '4036904031',
  prompt: true,
};

const CallCalgary = {
  number: '4036904031',
  prompt: true,
};

const Resources = () => (
  <SafeAreaView style={styles.pageContainer}>
    <ScrollView style={{ padding: 25 }}>
      <View style={styles.pageImageContainer}>
        <Image style={styles.pageImage} source={ResourcesImage} />
      </View>
      <View style={styles.pageTextContainer}>
        <Paragraph>
          <AppText>
            The Alberta Worker’s Health Centre and Calgary Workers Resource
            Centre provide free help for people who have issues with health and
            safety and worker rights:
          </AppText>
        </Paragraph>
        <Subheading
          style={{ marginTop: 30, marginBottom: 15, fontWeight: 'bold' }}
        >
          Alberta Workers Health Centre
        </Subheading>
        <Paragraph style={{ marginBottom: 25 }}>
          <AppText>
            Services are free. They provide a first point of contact for workers
            with occupational health and safety issues in their workplace. They
            will provide support, public legal education, and referrals.
          </AppText>
        </Paragraph>
        <View
          style={{
            shadowColor: colors.black,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 50,
          }}
        >
          <RectButton
            onPress={() => call(CallAlberta).catch(console.error)}
            style={styles.button}
          >
            <View style={styles.buttonContent} accessible>
              <FontAwesome name="phone" size={24} color="black" />
              <Text style={{ marginStart: 20 }}>780-486-9009</Text>
            </View>
          </RectButton>
        </View>
        <View
          style={{
            shadowColor: colors.black,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 50,
          }}
        >
          <RectButton
            onPress={() => {
              Linking.openURL('https://workershealthcentre.ca/');
            }}
            style={styles.button}
          >
            <View style={styles.buttonContent} accessible>
              <SimpleLineIcons name="globe" size={24} color="black" />
              <Text style={{ marginStart: 20 }}>
                http://wwww.workershealthcentre.ca/
              </Text>
            </View>
          </RectButton>
        </View>
        <Subheading
          style={{ marginTop: 30, marginBottom: 15, fontWeight: 'bold' }}
        >
          Calgary Workers Resource Centre
        </Subheading>
        <Paragraph style={{ marginBottom: 25 }}>
          <AppText>
            They provide free case work and a public legal education program if
            you are having issues understanding your rights in your workplace.
          </AppText>
        </Paragraph>
        <View
          style={{
            shadowColor: colors.black,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 50,
          }}
        >
          <RectButton
            onPress={() => call(CallCalgary).catch(console.error)}
            style={styles.button}
          >
            <View style={styles.buttonContent} accessible>
              <FontAwesome name="phone" size={24} color="black" />
              <Text style={{ marginStart: 20 }}>403-264-8100</Text>
            </View>
          </RectButton>
        </View>
        <View
          style={{
            shadowColor: colors.black,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 50,
          }}
        >
          <RectButton
            onPress={() => {
              Linking.openURL('https://workershealthcentre.ca/');
            }}
            style={styles.button}
          >
            <View style={styles.buttonContent} accessible>
              <SimpleLineIcons name="globe" size={24} color="black" />
              <Text style={{ marginStart: 20 }}>
                http://wwww.workershealthcentre.ca/
              </Text>
            </View>
          </RectButton>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',

    height: 45,
    borderRadius: 10,
    backgroundColor: colors.white,
    paddingLeft: 20,
    marginBottom: 20,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  pageContainer: {
    flex: 1,
  },
  pageImageContainer: {
    width: '100%',
    height: 180,

    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  pageTextContainer: {
    flex: 1,
    marginBottom: 50,
  },
  pageImage: {
    width: 130,
    height: 130,
  },
});

export default Resources;
