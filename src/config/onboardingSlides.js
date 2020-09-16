import colors from '../config/colors';
import placeholder from 'assets/placeholder.png';
import imgIntro01 from 'assets/intro1_img.png';

const slides = [
  {
    key: 'one',
    title: 'Welcome',
    text:
      'Gain confidence to speak up and know your rights with easy access to information and resources about your safety, rights, and employment standards in the workplace.',
    image: imgIntro01,
    backgroundColor: colors.white,
  },
  {
    key: 'two',
    title: 'Learn Faster and Easier',
    text:
      'Trouble understanding difficult terms?\n\nSimply tap a word for its definition or look it up inside our glossary.',
    image: placeholder,
    backgroundColor: '#8C569F',
  },
  {
    key: 'three',
    title: 'Interactive Learning',
    text:
      'Be guided through different workplace scenarios to learn your options when faced with a problem, and be able to make an informed decision.',
    image: placeholder,
    backgroundColor: '#B80072',
  },
  {
    key: 'four',
    title: 'Disclaimer',
    text:
      'The purpose of this app is solely to educate workers about workplace health and safety regulations, general advice, guidance on your rights, and the services available to you.\n\nConfused about the English here? Talk to someone you trust who can help you translate.\n\nNone of the information provided is intended to be used in a legal way.',
    image: placeholder,
    backgroundColor: '#129C96',
  },
];

export default slides;
