import getData from 'utils/getData';

import imgIntro01 from 'assets/intro/welcome.png';
import imgIntro02 from 'assets/intro/learnfaster.png';
import imgIntro03 from 'assets/intro/interactivelearning.png';
import imgIntro04 from 'assets/intro/disclaimer.png';

const getSlides = async () => {
  const slides = [];
  getData('INTRO_SLIDES').then(response => {
    const { slide1, slide2, slide3, slide4 } = response;

    slides.push([
      {
        key: response.slide1.title,
        title: response.slide1.title,
        text: response.slide1.description,
        image: imgIntro01,
      },
    ]);
    return slides;
  });
};

export default getSlides;
