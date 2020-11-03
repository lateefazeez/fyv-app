import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import DrawerNavigation from 'navigation/DrawerNavigation';
import IntroSlider from 'components/IntroSlider';
import fetchAndStoreContent from 'utils/fetchAndStoreContent';

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    fetchAndStoreContent();
  }, []);

  return showIntro ? (
    <IntroSlider onDone={() => setShowIntro(false)} />
  ) : (
    <DrawerNavigation />
  );
};

export default App;
