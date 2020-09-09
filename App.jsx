import React, { useState } from 'react';
import IntroSlider from './src/components/IntroSlider';

import DrawerNavigation from './src/navigation/DrawerNavigation';

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  const onDone = () => setShowIntro(false);

  if (showIntro) return <IntroSlider onDone={onDone} />;

  return <DrawerNavigation />;
};

export default App;
