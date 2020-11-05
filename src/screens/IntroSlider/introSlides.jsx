import getData from 'utils/getData';

import imgIntro01 from 'assets/intro/welcome.png';
import imgIntro02 from 'assets/intro/learnfaster.png';
import imgIntro03 from 'assets/intro/interactivelearning.png';
import imgIntro04 from 'assets/intro/disclaimer.png';

const getSlides = async () => {
  const rawData = await getData('INTRO_SLIDES').then(response => response);
  const { slide1, slide2, slide3, slide4 } = rawData;

  const slides = [
    {
      key: slide1.title,
      title: slide1.title,
      text: slide1.description,
      image: imgIntro01,
    },
    {
      key: slide2.title,
      title: slide2.title,
      text: slide2.description,
      image: imgIntro02,
    },
    {
      key: slide3.title,
      title: slide3.title,
      text: slide3.description,
      image: imgIntro03,
    },
    {
      key: slide4.title,
      title: slide4.title,
      text: slide4.description,
      image: imgIntro04,
    },
  ];
  return slides;
};

export default getSlides;
