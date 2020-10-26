import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Fa5Icon from 'react-native-vector-icons/FontAwesome5';

import menuLogo from '../../assets/logo_white.png';

const MenuDrawerContent = () => (
  <View style={styles.menuContainer}>
    <View
      style={{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        source={menuLogo}
        style={{ flex: 2, margin: 36 }}
        width="null"
        height="null"
        resizeMode="contain"
      />
      <Text
        style={{
          flex: 1,
          fontWeight: 'bold',
          fontSize: 16,
          color: '#fff',
        }}
      >
        School of Global Access
      </Text>
    </View>
    <View
      style={{
        flex: 3,
      }}
    >
      <View style={styles.menuItem}>
        <Fa5Icon style={styles.menuIcon} name="hard-hat" size={20} />
        <Text style={styles.menuText}>Workplace Safety</Text>
      </View>
      <View style={styles.menuSubItem}>
        <Fa5Icon style={styles.menuIcon} name="hand-holding-heart" size={20} />
        <Text style={styles.menuText}>Occupational Health and Safety</Text>
      </View>
      <View style={styles.menuSubItem}>
        <MaterialIcon style={styles.menuIcon} name="scale-balance" size={24} />
        <Text style={styles.menuText}>Human Rights</Text>
      </View>
      <View style={styles.menuSubItem}>
        <MaterialIcon
          style={styles.menuIcon}
          name="clock-check-outline"
          size={24}
        />
        <Text style={styles.menuText}>Employment Standards</Text>
      </View>
      <View style={styles.menuItem}>
        <MaterialIcon
          style={styles.menuIcon}
          name="chat-processing"
          size={24}
        />
        <Text style={styles.menuText}>Finding Your Voice</Text>
      </View>
      <View style={styles.menuItem}>
        <FeatherIcon style={styles.menuIcon} name="external-link" size={24} />
        <Text style={styles.menuText}>Resources</Text>
      </View>
      <View style={styles.menuItem}>
        <Fa5Icon style={styles.menuIcon} name="exclamation-circle" size={20} />
        <Text style={styles.menuText}>Disclaimer</Text>
      </View>
    </View>
  </View>
);

export default MenuDrawerContent;

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#3B3B3B',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 8,
    marginVertical: 4,
  },
  menuSubItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 8,
    marginVertical: 4,
    marginLeft: 16,
  },
  menuIcon: { color: '#fff' },
  menuText: {
    fontSize: 14,
    marginLeft: 8,
    color: '#fff',
  },
});
