import React from 'react';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from 'config/colors.json';

const ContentSlider = ({ slides, style, ...props }) => (
  <Swiper
    style={[{ height: 400 }, style]}
    activeDotColor={colors.darkGrey}
    dotColor={colors.transpGrey}
    nextButton={
      <Icon name="chevron-right" size={40} color={colors.transpWhite} />
    }
    prevButton={
      <Icon name="chevron-left" size={40} color={colors.transpWhite} />
    }
    {...props}
  >
    {slides.map((slide, index) => slide(index))}
  </Swiper>
);

export default ContentSlider;
