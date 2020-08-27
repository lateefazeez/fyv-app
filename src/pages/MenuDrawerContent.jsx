import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Fa5Icon from 'react-native-vector-icons/FontAwesome5';

import colors from '../config/colors';
import menuItems from '../config/menuItems';
import menuLogo from '../../assets/logo_white.png';

const MenuDrawerContent = ({ navigation }) => {
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
            icon={() => {
              switch (item.menuIconLib) {
                case 'MaterialIcon':
                  return (
                    <MaterialIcon
                      color={colors.white}
                      name={item.menuIconName}
                      size={item.menuIconSize}
                    />
                  );
                case 'FeatherIcon':
                  return (
                    <FeatherIcon
                      color={colors.white}
                      name={item.menuIconName}
                      size={item.menuIconSize}
                    />
                  );
                case 'Fa5Icon':
                  return (
                    <Fa5Icon
                      color={colors.white}
                      name={item.menuIconName}
                      size={item.menuIconSize}
                    />
                  );

                default:
                  return null;
              }
            }}
            onPress={() => navigation.navigate(item.menuLabel)}
          />
        ))}
      </DrawerContentScrollView>
    </View>
  );
};

export default MenuDrawerContent;

const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: '#3B3B3B',
    flex: 1,
  },
  menuContainerLowerSection: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  menuContainerUpperSection: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuLogo: {
    height: 128,
    marginTop: 64,
    resizeMode: 'contain',
  },
  menuLogoText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 24,
  },
  menuItem: {
    marginTop: 0,
  },
  menuSubItem: {
    marginLeft: 64,
    marginTop: 0,
  },
  menuItemText: { color: '#fff' },
});
