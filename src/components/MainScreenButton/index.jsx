import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

const MainScreenButton = ({ children }) => {
  const navigation = useNavigation();

  return (
    <RectButton
      style={styles.button}
      onPress={() => navigation.navigate(children)}
    >
      <View accessible>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </RectButton>
  );
};

export default MainScreenButton;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: '#129C96',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 8,
    paddingLeft: 128,
    paddingRight: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
