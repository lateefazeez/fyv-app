import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import DrawerNavigation from 'navigation/DrawerNavigation';

import IntroSlider from 'components/IntroSlider';

import glossary from 'config/glossary.json';
import client from './src/services/api';

console.ignoredYellowBox = ['Setting a timer'];

const fetchData = () => {
  client.fetch('*').then(response => {
    console.log(response);
  });
};

const postGlossary = () => {
  glossary.forEach(item => {
    const newItem = { _type: 'glossary', ...item };
    client.create(newItem).then(response => {
      console.log(
        'Glossary created sucessfully: ',
        newItem.word,
        ' - ',
        response._id,
      );
    });
  });
};

const deleteGlossary = () => {
  client.fetch('*[_type == "glossary"]').then(response => {
    response.forEach(item => {
      client
        .delete(item._id)
        .then(res => {
          console.log('Word deleted');
        })
        .catch(err => {
          console.error('Delete failed: ', err.message);
        });
    });
  });
};

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // deleteGlossary();
    // postGlossary();
    // fetchData();
  }, []);

  // TODO: save this state to AsyncStorage and recover it using useEffect hook to avoid user from seeing the intro every time the app opens.

  return showIntro ? (
    <IntroSlider onDone={() => setShowIntro(false)} />
  ) : (
    <DrawerNavigation />
  );
};

export default App;
