import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async storedKey => {
  try {
    const storedData = await AsyncStorage.getItem(storedKey);
    return JSON.parse(storedData);
  } catch (error) {
    throw new Error(error);
  }
};

export default getData;
