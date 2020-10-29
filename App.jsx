import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import DrawerNavigation from 'navigation/DrawerNavigation';

import IntroSlider from 'components/IntroSlider';

import localData from 'config/testData.json';
import client from './src/services/api';

console.ignoredYellowBox = ['Setting a timer'];

const fetchData = async () => {
  const isConnected = await NetInfo.fetch();
  let lastUpdate = await AsyncStorage.getItem('LAST_UPDATE');

  if (!lastUpdate) {
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
      ['LAST_UPDATE', '2000-01-01T00:00:00.000Z'],
    ]);

    lastUpdate = await AsyncStorage.getItem('LAST_UPDATE');
  }

  if (lastUpdate && isConnected) {
    console.log('WE ARE FETCHING DATA...');

    console.log('lastUpdate: ', lastUpdate);

    await client.fetch(`* [ _updatedAt > '${lastUpdate}' ]`).then(response => {
      console.log('response: ', response);

      // TODO: Compare and merge/replace updated items
      // TODO: IF FETCH AND REPLACE IS COMPLETE => await AsyncStorage.setItem('LAST_UPDATE', new Date.now())
    });
  }

  // ! USING MULTIGET: we can get all data from AsyncStorage at once, if needed.
  AsyncStorage.getAllKeys((err, keys) => {
    AsyncStorage.multiGet(keys, (err, stores) => {
      stores.map((result, i, store) => {
        // get at each store's key/value so you can work with it
        const key = store[i][0];
        const value = store[i][1];
        console.log('STORED DATA: ', key, value, '\n');
      });
    });
  });
};

// const postGlossary = () => {
//   glossary.forEach(item => {
//     const newItem = { _type: 'glossary', ...item };
//     client.create(newItem).then(response => {
//       console.log(
//         'Glossary created sucessfully: ',
//         newItem.word,
//         ' - ',
//         response._id,
//       );
//     });
//   });
// };

// const deleteGlossary = () => {
//   client.fetch('*[_type == "glossary"]').then(response => {
//     response.forEach(item => {
//       client
//         .delete(item._id)
//         .then(res => {
//           console.log('Word deleted');
//         })
//         .catch(err => {
//           console.error('Delete failed: ', err.message);
//         });
//     });
//   });
// };

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // deleteGlossary();
    // postGlossary();
    fetchData();
    // TODO: HARD CODE - put all the content into a local json file;
    // TODO: CHECK IF THERE'S SOMETHING IN ASYNC STORAGE
    // TODO: IF NO: separate content from local file into screens / assets and save into AsyncStorage;
    // TODO: IF YES: compare each stored object update date to the content from Sanity;
    // TODO: fetch only the updated content and store into AsyncStorage;
  }, []);

  // TODO: save this state to AsyncStorage and recover it using useEffect hook to avoid user from seeing the intro every time the app opens.

  return showIntro ? (
    <IntroSlider onDone={() => setShowIntro(false)} />
  ) : (
    <DrawerNavigation />
  );
};

export default App;
