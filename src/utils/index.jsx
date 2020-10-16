import { Alert } from 'react-native';

export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const testAlert = () => {
  console.log('Clicked!');

  Alert.alert(
    'Clicked!',
    'Clicking OK',
    [
      {
        text: 'Cancel',
        onPress: () => {
          console.log('Canceled!');
        },
        style: 'cancel',
      },
    ],
    { cancelable: false },
  );
};

export const getSections = data => {
  const sections = [];
  const titles = [];
  const words = [];

  data.map(({ word, category, description, phonetics }) => {
    const title = word.slice(0, 1).toUpperCase();
    !titles.includes(title) && titles.push(title);

    const sortedWord = { title, word, category, description, phonetics };
    words.push(sortedWord);
  });

  titles.map(item => {
    words.map(obj => {
      if (item === obj.title) {
        const index = titles.indexOf(item);
        const { word, category, description, phonetics } = obj;
        if (!sections[index]) {
          sections[index] = {
            title: item,
            data: [{ word, category, description, phonetics }],
          };
        } else {
          sections[index] = {
            ...sections[index],
            data: [
              ...sections[index].data,
              { word, category, description, phonetics },
            ],
          };
        }
      }
    });
  });
  return sections;
};
