import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
// import { AsyncStorage } from '@react-native-community/async-storage';
import NetInfo from '@react-native-community/netinfo';
import DrawerNavigation from 'navigation/DrawerNavigation';

import IntroSlider from 'components/IntroSlider';

import localData from 'config/localData.json';
import client from './src/services/api';

console.ignoredYellowBox = ['Setting a timer'];

const fetchData = async () => {
  const isConnected = await NetInfo.fetch();
  const storedItems = await AsyncStorage.getAllKeys();

  if (!storedItems && !isConnected) {
    console.log('WE ARE HERE FOR THE FIRST TIME');

    const appSettings = JSON.stringify(
      localData.filter(item => item._id === 'appSettings'),
    );
    const disclaimer = JSON.stringify(
      localData.filter(item => item._id === 'disclaimer'),
    );
    const glossary = JSON.stringify(
      localData.filter(item => item._type === 'glossary'),
    );
    const resources = JSON.stringify(
      localData.filter(item => item._type === 'resource'),
    );

    await AsyncStorage.multiSet([
      ['APP_SETTINGS', appSettings],
      ['DISCLAIMER', disclaimer],
      ['GLOSSARY', glossary],
      ['RESOURCES', resources],
    ]);
  }

  if (isConnected) {
    let fetchedData = [];
    await client.fetch('*').then(response => {
      fetchedData = response;
    });

    const fetchedAppSettings = JSON.stringify(
      fetchedData.filter(item => item._id === 'appSettings'),
    );
    const fetchedDisclaimer = JSON.stringify(
      fetchedData.filter(item => item._id === 'disclaimer'),
    );
    const fetchedGlossary = JSON.stringify(
      fetchedData.filter(item => item._type === 'glossary'),
    );
    const fetchedResources = JSON.stringify(
      fetchedData.filter(item => item._type === 'resource'),
    );

    await AsyncStorage.multiSet([
      ['APP_SETTINGS', fetchedAppSettings],
      ['DISCLAIMER', fetchedDisclaimer],
      ['GLOSSARY', fetchedGlossary],
      ['RESOURCES', fetchedResources],
    ]);
  }
};

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  return showIntro ? (
    <IntroSlider onDone={() => setShowIntro(false)} />
  ) : (
    <DrawerNavigation />
  );
};

export default App;
