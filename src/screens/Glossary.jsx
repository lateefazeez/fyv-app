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
    title: 'B',
    data: ['Breaches'],
  },
  {
    title: 'C',
    data: ['Complaint', 'Conduct', 'Confidential', 'Consequence', 'Constitute'],
  },
  {
    title: 'D',
    data: ['Discrimination', 'Draining'],
  },
  {
    title: 'E',
    data: ['Ethnocultural'],
  },
  {
    title: 'L',
    data: ['Legislation'],
  },
  {
    title: 'M',
    data: ['Male-dominated', 'Maneuver', 'Manipulation', 'Misogynist'],
  },
  {
    title: 'O',
    data: ['Obligation', 'Overwhelming'],
  },
  {
    title: 'R',
    data: ['Rehabilitation', 'Reprisal'],
  },
  {
    title: 'S',
    data: ['Standards'],
  },
  {
    title: 'T',
    data: ['Termination', 'Toxic', 'Trusted'],
  },
  {
    title: 'U',
    data: ['Undocumented'],
  },
  {
    title: 'W',
    data: ['Warrant'],
  },
];

const sortedData = listData.map(item => ({
  title: item.title,
  data: item.data.sort(),
}));

const Item = ({ title }) => {
  const [hiddenDescription, setHiddenDescription] = useState(false);

  return (
    <View
      style={{
        borderColor: colors.mediumGrey,
        borderStyle: 'solid',
        borderWidth: 0.5,
      }}
    >
      <View>
        <RectButton
          style={{ backgroundColor: colors.white }}
          onPress={() => {
            setHiddenDescription(!hiddenDescription);
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 24,
              paddingVertical: 16,
            }}
          >
            <Text style={styles.itemTitle}>{title}</Text>
            <Icon name="chevron-down" size={24} color={colors.darkGrey} />
          </View>
        </RectButton>

        {hiddenDescription && (
          <View
            style={{
              padding: 24,
              backgroundColor: colors.lightGrey,
              borderColor: colors.mediumGrey,
              borderStyle: 'solid',
              borderWidth: 0.5,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}
            >
              <Paragraph
                style={{
                  color: colors.darkGrey,
                  fontStyle: 'italic',
                }}
              >
                dəˈskripSH(ə)n
              </Paragraph>
              <Icon
                style={{ marginLeft: 8 }}
                name="volume-high"
                size={24}
                color={colors.darkGrey}
                onPress={() => Speech.speak(title, { pitch: 0.5, rate: 0.5 })}
              />
            </View>
            <Paragraph style={{ fontSize: 14 }}>
              a spoken or written representation or account of a person, object,
              or event.
            </Paragraph>
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
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
      </SafeAreaView>
      <FloatingButtonFYV />
    </>
  );
};
export default Glossary;

const styles = StyleSheet.create({
  sectionHeader: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: colors.primary,
    paddingVertical: 4,
    paddingHorizontal: 24,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
