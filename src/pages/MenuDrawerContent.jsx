import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Fa5Icon from 'react-native-vector-icons/FontAwesome5';

import colors from '../config/colors';
import menuLogo from '../../assets/logo_white.png';

const menuItems = [
  {
    menuLabel: 'Workplace Safety',
    menuIconLib: 'Fa5Icon',
    menuIconName: 'hard-hat',
    menuIconSize: 20,
    menuCategory: 'item',
  },
  {
    menuLabel: 'Occupational Health and Safety',
    menuIconLib: 'Fa5Icon',
    menuIconName: 'hand-holding-heart',
    menuIconSize: 20,
    menuCategory: 'subItem',
  },
  {
    menuLabel: 'Human Rights',
    menuIconLib: 'MaterialIcon',
    menuIconName: 'scale-balance',
    menuIconSize: 24,
    menuCategory: 'subItem',
  },
  {
    menuLabel: 'Employment Standards',
    menuIconLib: 'MaterialIcon',
    menuIconName: 'clock-check-outline',
    menuIconSize: 24,
    menuCategory: 'subItem',
  },
  {
    menuLabel: 'Finding Your Voice',
    menuIconLib: 'MaterialIcon',
    menuIconName: 'chat-processing',
    menuIconSize: 24,
  },
  {
    menuLabel: 'Resources',
    menuIconLib: 'FeatherIcon',
    menuIconName: 'external-link',
    menuIconSize: 20,
  },
  {
    menuLabel: 'Disclaimers',
    menuIconLib: 'Fa5Icon',
    menuIconName: 'exclamation-circle',
    menuIconSize: 20,
  },
];

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
            style={styles.menuItem}
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
    height: 160,
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
  menuItemText: { color: '#fff' },
  menuSubItem: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 4,
    marginLeft: 32,
    paddingVertical: 8,
  },
});
