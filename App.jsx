import 'react-native-gesture-handler';
import React, { useState } from 'react';

import IntroSlider from 'components/IntroSlider';
import DrawerNavigation from 'navigation/DrawerNavigation';

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  const onDone = () => setShowIntro(false);

  if (showIntro) return <IntroSlider onDone={onDone} />;

  return <DrawerNavigation />;
};

export default App;
