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

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onSearch}
      value={searchQuery}
    />
  );
};

const listData = [
  {
    title: 'A',
    data: ['List', 'Is', 'Empty', 'A', 'Ab', 'Abc', 'Abcd'],
  },
  {
    title: 'B',
    data: ['List', 'Is', 'Empty', 'B', 'Ba', 'Bac', 'Bacd'],
  },
  {
    title: 'C',
    data: ['List', 'Is', 'Empty', 'C', 'Ca', 'Cab', 'Cabd'],
  },
  {
    title: 'D',
    data: ['List', 'Is', 'Empty', 'D', 'Da', 'Dab', 'Dabc'],
  },
];

const sortedData = listData.map(item => ({
  title: item.title,
  data: item.data.sort(),
}));

const Item = ({ title }) => (
  <RectButton onPress={testAlert}>
    <View accessible style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </RectButton>
);

const Glossary = ({ navigation }) => {
  const [filterBookmarks, setFilterBookmarks] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

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
        {showSearch && <Search />}
        <SectionList
          sections={sortedData}
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
