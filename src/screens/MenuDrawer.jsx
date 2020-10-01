import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { List } from 'react-native-paper';
import Constants from 'expo-constants';

import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Fa5Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from 'config/colors.json';
import items from 'config/menuItems.json';
import logo from 'assets/logos/white.png';

const getIcon = ({ lib, name, size, color }) => {
  switch (lib) {
    case 'MaterialCommunity':
      return (
        <MaterialCommunity
          color={color}
          name={name}
          size={size}
          style={styles.icon}
        />
      );
    case 'MaterialIcon':
      return (
        <MaterialIcon
          color={color}
          name={name}
          size={size}
          style={styles.icon}
        />
      );
    case 'FeatherIcon':
      return (
        <FeatherIcon
          color={color}
          name={name}
          size={size}
          style={styles.icon}
        />
      );
    case 'Fa5Icon':
      return (
        <Fa5Icon color={color} name={name} size={size} style={styles.icon} />
      );
    case 'Ionicons':
      return (
        <Ionicons color={color} name={name} size={size} style={styles.icon} />
      );
    default:
      return null;
  }
};

const MenuDrawer = ({ navigation }) => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <DrawerContentScrollView
      contentContainerStyle={{ flex: 1, paddingTop: Constants.statusBarHeight }}
    >
      <View style={styles.upperSection}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>School of Global Access</Text>
        <MaterialCommunity
          color={colors.white}
          name="close"
          size={24}
          onPress={() => navigation.closeDrawer()}
          style={styles.closeDrawer}
        />
      </View>
      <ScrollView contentContainerStyle={styles.lowerSection}>
        {items.map(item => {
          if (!item.parentScreen) {
            return (
              <List.Item
                key={item.label}
                title={item.label}
                titleStyle={styles.label}
                left={() =>
                  getIcon({
                    lib: item.iconLib,
                    name: item.iconName,
                    size: item.iconSize ? item.iconSize : 20,
                    color: colors.darkerGrey,
                  })
                }
                right={() =>
                  item.dropdown && (
                    <MaterialCommunity
                      style={{ marginTop: 3 }}
                      color={colors.black}
                      name={dropDown ? 'chevron-up' : 'chevron-down'}
                      size={24}
                      onPress={() => setDropDown(!dropDown)}
                    />
                  )
                }
                onPress={() =>
                  item.parentScreen
                    ? navigation.navigate(item.parentScreen, {
                        screen: item.label,
                      })
                    : navigation.navigate(item.label)
                }
                style={styles.item}
              />
            );
          }

          if (item.parentScreen && dropDown) {
            return (
              <List.Item
                key={item.label}
                title={item.label}
                titleStyle={styles.label}
                left={() =>
                  getIcon({
                    lib: item.iconLib,
                    name: item.iconName,
                    size: item.iconSize ? item.iconSize : 20,
                    color: colors.darkerGrey,
                  })
                }
                onPress={() =>
                  navigation.navigate(item.parentScreen, {
                    screen: item.label,
                  })
                }
                style={styles.subItem}
              />
            );
          }
        })}
      </ScrollView>
    </DrawerContentScrollView>
  );
};

export default MenuDrawer;

const styles = StyleSheet.create({
  upperSection: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    paddingTop: 48,
    paddingBottom: 48,
    position: 'relative',
  },
  closeDrawer: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  label: {
    color: colors.darkerGrey,
    fontSize: 14,
  },
  logo: {
    height: 128,
    resizeMode: 'contain',
  },
  logoText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 24,
  },
  lowerSection: {
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    paddingTop: 16,
    paddingHorizontal: 16,
    flexGrow: 1,
  },
  icon: {
    marginTop: 4,
    marginRight: 8,
  },
  item: {
    justifyContent: 'center',
  },
  subItem: {
    marginLeft: 32,
    justifyContent: 'center',
  },
  activeItemText: {
    color: colors.primary,
    fontSize: 14,
  },
});
