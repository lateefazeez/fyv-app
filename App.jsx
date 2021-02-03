import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import DrawerNavigation from 'navigation/DrawerNavigation';
import IntroSlider from 'screens/IntroSlider';
import fetchAndStoreContent from 'utils/fetchAndStoreContent';
import * as SplashScreen from 'expo-splash-screen';

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }

      prepareData();
    };
    fetchData();
  }, []);

  async function prepareData() {
    try {
      await fetchAndStoreContent();
    } catch (e) {
      console.warn(e);
    } finally {
      setIsReady(true);
      await SplashScreen.hideAsync();
    }
  }

  if (!isReady) {
    return null;
  }
  return showIntro ? (
    <IntroSlider onDone={() => setShowIntro(false)} />
  ) : (
    <DrawerNavigation />
  );
};

export default App;
