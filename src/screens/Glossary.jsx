import React, { useState, useLayoutEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
} from 'react-native';
import * as Speech from 'expo-speech';
import { Searchbar } from 'react-native-paper';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Paragraph from 'components/Paragraph';
import FloatingButtonFYV from 'components/FloatingButtonFYV';
import colors from 'config/colors.json';

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

const Item = ({ title }) => {
  const [hiddenDescription, setHiddenDescription] = useState(false);

  return (
    <View>
      <View style={styles.item}>
        <RectButton
          style={styles.itemTitle}
          onPress={() => {
            console.log('click');
            setHiddenDescription(!hiddenDescription);
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.title}>{title}</Text>
            <Icon
              name="volume-high"
              size={24}
              color={colors.darkGrey}
              onPress={() => Speech.speak(title, { pitch: 0.5, rate: 0.5 })}
            />
          </View>
          <Icon name="chevron-down" size={24} color={colors.darkGrey} />
        </RectButton>

        {hiddenDescription && (
          <View style={{ flexDirection: 'row' }}>
            <Paragraph style={{ marginTop: 16 }}>Test description</Paragraph>
          </View>
        )}
      </View>
    </View>
  );
};

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
    borderColor: colors.mediumGrey,
    borderStyle: 'solid',
    borderWidth: 0.5,
    padding: 16,
    paddingLeft: 24,
  },
  itemTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    marginRight: 8,
  },
});
