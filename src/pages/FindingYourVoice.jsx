/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const newLocal = require("./icons/finding_your_voice_icon.png");

const newLocal_1 = require("./icons/group_253.png");

const FindingYourVoice = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
    <Image
      style={{ width: 100, height: 100, top: 10 }}
      source={newLocal}
    />
    <Text style={{ fontSize: 28, fontWeight: 'bold', marginTop: 20 }}>
      Finding Your
    </Text>
    <Text style={{ fontSize: 28, fontWeight: 'bold', marginLeft: 5 }}>
      Voice
    </Text>
    <View style={styles.mainContainer}>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.maintext}>When face with dilemma</Text>
        <Text style={styles.maintext}>at work,many different</Text>
        <Text style={styles.maintext}>factors can change</Text>
        <Text style={styles.maintext}>the way you choose a</Text>
        <Text style={styles.maintext}>solution</Text>
      </View>
      <View style={{ marginStart: 200, marginTop: -140 }}>
        <Image
          style={{ width: 200, height: 200, resizeMode: 'contain' }}
          source={newLocal_1}
        />
      </View>
    </View>
  </View>
);

export default FindingYourVoice;
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    backgroundColor: '#D3D3D3',
    width: 400,
    height: 200,
  },
  maintext: {
    fontSize: 16,
    marginStart: 10,
  },
});
