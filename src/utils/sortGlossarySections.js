const sortGlossarySections = data => {
  const sections = [];
  const titles = [];
  const words = [];

  data.forEach(({ word, category, description, phonetics }) => {
    const title = word.slice(0, 1).toUpperCase();
    if (!titles.includes(title)) titles.push(title);

    const wordObject = { title, word, category, description, phonetics };
    words.push(wordObject);
  });

  titles.forEach(item => {
    words.forEach(obj => {
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

export default sortGlossarySections;
