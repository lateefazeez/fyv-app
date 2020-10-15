import React, { useState, useLayoutEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FloatingButtonFYV from 'components/FloatingButtonFYV';
import { testAlert } from 'utils';
import colors from 'config/colors';
import rawData from 'config/glossary.json';

/* const sortedData = () => {
  const sections = [];

  const preSortedData = rawData.map(
    ({ word, category, description, isBookmarked }) => {
      const title = word.slice(0).toUpperCase();

      sections.push({
        title,
        data: { word, category, description, isBookmarked },
      });
    },
  );

  // const sectionsTitles = preSortedData.filter(
  //   ({ title }, index, self) => self.indexOf(title) === index,
  // );

  return preSortedData;
}; */

const Item = ({ title }) => (
  <RectButton onPress={testAlert}>
    <View accessible style={styles.item}>
      <Text style={styles.title}>{title.word}</Text>
    </View>
  </RectButton>
);

const Glossary = ({ navigation }) => {
  const sections = [];
  const titles = [];
  const words = [];

  (() => {
    rawData.map(({ word, category, description }) => {
      const title = word.slice(0, 1).toUpperCase();
      !titles.includes(title) && titles.push(title);

      const sortedWord = { title, word, category, description };
      words.push(sortedWord);
    });

    titles.map(item => {
      words.map(obj => {
        if (item === obj.title) {
          const index = titles.indexOf(item);
          const { word, category, description } = obj;
          if (!sections[index]) {
            sections[index] = {
              title: item,
              data: [{ word, category, description }],
            };
          } else {
            sections[index] = {
              ...sections[index],
              data: [...sections[index].data, { word, category, description }],
            };
          }
        }
      });
    });
  })();

  console.log('sections: ', sections);

  const sortedData = sections;

  const [filterBookmarks, setFilterBookmarks] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [shownData, setShownData] = useState(sortedData);

  const onSearch = query => {
    const results = [];

    if (query === '') {
      setIsSearching(false);
      setShownData(sortedData);
    } else {
      shownData.map(item =>
        item.data.map(
          word =>
            word.includes(query) &&
            results.push({ title: item.title, data: { ...word } }),
        ),
      );

      setIsSearching(true);
      if (results[0]) setShownData(results);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Back',
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
          <Icon
            name={
              filterBookmarks
                ? 'bookmark-multiple'
                : 'bookmark-multiple-outline'
            }
            size={24}
            color={colors.white}
            onPress={() => setFilterBookmarks(!filterBookmarks)}
            style={{ marginRight: 16 }}
          />
          <Icon
            name="magnify"
            size={24}
            color={colors.white}
            onPress={() => setShowSearch(!showSearch)}
            style={{ marginRight: 16 }}
          />
          <Icon
            name="menu"
            size={24}
            color={colors.white}
            onPress={() => navigation.toggleDrawer()}
            style={{ marginRight: 16 }}
          />
        </View>
      ),
    });
  }, [navigation, filterBookmarks, showSearch]);

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        {showSearch && (
          <Searchbar placeholder="Search" onChangeText={onSearch} />
        )}
        <SectionList
          sections={shownData}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </SafeAreaView>
      <FloatingButtonFYV />
    </>
  );
};
export default Glossary;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    borderColor: colors.mediumGrey,
    borderStyle: 'solid',
    borderWidth: 0.5,
    padding: 16,
    paddingLeft: 24,
  },
  header: {
    color: '#fff',
    fontSize: 16,
    backgroundColor: colors.darkerGrey,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 16,
  },
});
