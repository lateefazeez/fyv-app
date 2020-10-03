import React from 'react';
import { StyleSheet } from 'react-native';

import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Fa5Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomIcon = ({ lib, name, size, color }) => {
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

export default CustomIcon;

const styles = StyleSheet.create({
  icon: {
    marginTop: 4,
    marginRight: 8,
  },
});
