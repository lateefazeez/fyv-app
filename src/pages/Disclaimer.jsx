import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Paragraph, Subheading } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../components/AppText';
import colors from '../config/colors';
import Bvc from '../../assets/bvc.png';
import Alberta from '../../assets/alberta.png';
import Annotation from '../../assets/annotation.png';
import Sodexo from '../../assets/sodexo.png';

const Disclaimer = () => (
  <ScrollView style={styles.pageContainer}>
    <View style={{ marginBottom: 30 }}>
      <View style={styles.disclaimer}>
        <MaterialCommunityIcons
          name="information-outline"
          size={35}
          color="black"
        />
        <Text style={styles.heading}>Disclaimer</Text>
      </View>
      <Paragraph>
        <AppText style={{ fontSize: 17 }}>
          The purpose of this app is solely to educate workers about workplace
          health and safety regulations, general advice, guidance on your
          rights, and the services available to you. None of the information
          provided is intended to be used for legal purposes.
        </AppText>
      </Paragraph>
    </View>
    <View style={styles.horizontalLine} />

    <View style={styles.funders}>
      <Text>Funded by the</Text>
      <Subheading style={{ fontWeight: 'bold' }}>
        Government of Alberta
      </Subheading>
      <Image
        style={{
          width: 150,
          height: 75,
          resizeMode: 'contain',
          marginBottom: 15,
        }}
        source={Alberta}
      />

      <Subheading style={{ marginBottom: 15, fontWeight: 'bold' }}>
        In partnership with:
      </Subheading>
      <View
        style={{
          backgroundColor: colors.black,
          height: 60,
          width: 260,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image style={{ width: 250, height: 40 }} source={Bvc} />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',

          padding: 30,
          marginBottom: 50,
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            style={{
              width: 120,
              height: 75,
              resizeMode: 'contain',
              marginBottom: 15,
            }}
            source={Sodexo}
          />
        </View>
        <View style={{ flex: 1, marginRight: 30 }}>
          <Image
            style={{
              width: 180,
              height: 150,
              resizeMode: 'contain',
              marginBottom: 15,
            }}
            source={Annotation}
          />
        </View>
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  alberta: {
    flex: 1,
    margin: 10,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disclaimer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 45,
    marginBottom: 20,
    marginTop: 20,
  },
  pageContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  horizontalLine: {
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 2,
    width: '55%',
    alignSelf: 'center',
    marginBottom: 35,
  },
  funders: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
export default Disclaimer;
