import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Paragraph, Subheading } from 'react-native-paper';

import ResourcesImage from '../../assets/resources_icon.png';
import AppText from '../components/AppText';

const Resources = () => (
  <ScrollView style={styles.pageContainer}>
    <View style={styles.pageImageContainer}>
      <Image style={styles.pageImage} source={ResourcesImage} />
    </View>
    <View style={styles.pageTextContainer}>
      <Paragraph>
        <AppText>
          The Alberta Worker’s Health Centre and Calgary Workers Resource Centre
          provide free help for people who have issues with health and safety
          and worker rights:
        </AppText>
      </Paragraph>
      <Subheading
        style={{ marginTop: 30, marginBottom: 15, fontWeight: 'bold' }}
      >
        Alberta Workers Health Centre
      </Subheading>
      <Paragraph>
        <AppText>
          Services are free. They provide a first point of contact for workers
          with occupational health and safety issues in their workplace. They
          will provide support, public legal education, and referrals.
        </AppText>
      </Paragraph>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    padding: 25,
  },
  pageImageContainer: {
    width: '100%',
    height: 180,

    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  pageTextContainer: {
    flex: 3,
  },
  pageImage: {
    width: 130,
    height: 130,
  },
});

export default Resources;
