import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';


const MainScreenButton = ( { children } ) => {

  const navigation = useNavigation();

  return (
    <RectButton style={styles.button} onPress={ () => navigation.navigate( children ) }>
      <View accessible>
        <Text style={ styles.buttonText }>{ children }</Text>
      </View>
    </RectButton>
  );
};

export default MainScreenButton;

const styles = StyleSheet.create({
  button: {
    height: 64,
    backgroundColor: "#129C96",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    padding: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});
