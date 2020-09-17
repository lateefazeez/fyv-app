import 'react-native-gesture-handler';
import React, { useState } from 'react';

import IntroSlider from 'components/IntroSlider';
import DrawerNavigation from 'navigation/DrawerNavigation';

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  // TODO: save this state to AsyncStorage and recover it using useEffect hook to avoid user from seeing the intro every time the app opens.

  return showIntro ? (
    <IntroSlider onDone={() => setShowIntro(false)} />
  ) : (
    <DrawerNavigation />
  );
};

export default App;
