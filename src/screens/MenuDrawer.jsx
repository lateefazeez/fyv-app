import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Fa5Icon from 'react-native-vector-icons/FontAwesome5';

import colors from 'config/colors';
import menuItems from 'config/menuItems';
import menuLogo from 'assets/logo_white.png';

const getIcon = ({ lib, name, size, color }) => {
  switch (lib) {
    case 'MaterialIcon':
      return <MaterialIcon color={color} name={name} size={size} />;
    case 'FeatherIcon':
      return <FeatherIcon color={color} name={name} size={size} />;
    case 'Fa5Icon':
      return <Fa5Icon color={color} name={name} size={size} />;

    default:
      return null;
  }
};

const MenuDrawer = ({ navigation }) => {
  return (
    <View style={styles.menuContainer}>
      <View style={styles.menuContainerUpperSection}>
        <Image source={menuLogo} style={styles.menuLogo} />
        <Text style={styles.menuLogoText}>School of Global Access</Text>
      </View>
      <DrawerContentScrollView
        contentContainerStyle={styles.menuContainerLowerSection}
      >
        {menuItems.map(item => (
          <DrawerItem
            key={item.menuLabel}
            label={item.menuLabel}
            style={
              item.menuCategory === 'subSection'
                ? styles.menuSubItem
                : styles.menuItem
            }
            labelStyle={styles.menuItemText}
            icon={() =>
              getIcon({
                lib: item.menuIconLib,
                name: item.menuIconName,
                size: item.menuIconSize,
                color: colors.darkerGrey,
              })
            }
            onPress={() => navigation.navigate(item.menuLabel)}
          />
        ))}
      </DrawerContentScrollView>
      <MaterialIcon
        color={colors.white}
        name="close"
        size={24}
        onPress={() => navigation.closeDrawer()}
        style={{ position: 'absolute', top: 16, left: 16 }}
      />
    </View>
  );
};

export default MenuDrawer;

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    position: 'relative',
  },
  menuContainerLowerSection: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  menuContainerUpperSection: {
    alignItems: 'center',
    backgroundColor: colors.darkerGrey,
    justifyContent: 'center',
    padding: 48,
    borderTopRightRadius: 32,
  },
  menuLogo: {
    height: 128,
    resizeMode: 'contain',
  },
  menuLogoText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 24,
  },
  menuItem: {
    marginTop: 0,
  },
  menuSubItem: {
    marginLeft: 64,
    marginTop: 0,
  },
  menuItemText: {
    color: colors.darkerGrey,
    fontSize: 14,
  },
});
