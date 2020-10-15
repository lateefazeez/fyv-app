import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
} from 'react-native';
import * as Speech from 'expo-speech';
import { Searchbar, IconButton } from 'react-native-paper';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Paragraph from 'components/Paragraph';
import FloatingButtonFYV from 'components/FloatingButtonFYV';
import colors from 'config/colors.json';

import { getSections } from 'utils';
import rawGlossaryData from 'config/glossary.json';

// const Search = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const onSearch = query => setSearchQuery(query);

//   return (
//     <Searchbar
//       placeholder="Search"
//       onChangeText={onSearch}
//       value={searchQuery}
//     />
//   );
// };

const Item = ({ title }) => {
  const [hiddenDescription, setHiddenDescription] = useState(true);

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
            <Text style={styles.itemTitle}>{title.word}</Text>

            <Icon
              name={hiddenDescription ? 'chevron-down' : 'chevron-up'}
              size={24}
              color={colors.darkGrey}
            />
          </View>
        </RectButton>

        {!hiddenDescription && (
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
                alignItems: 'center',
              }}
            >
              <Paragraph
                style={{
                  color: colors.primary,
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                {title.phonetics}
              </Paragraph>
              <IconButton
                style={{ marginLeft: 8 }}
                icon="volume-high"
                size={24}
                color={colors.darkGrey}
                onPress={() =>
                  Speech.speak(title.word, { pitch: 0.9, rate: 0.6 })
                }
              />
            </View>
            <Paragraph
              style={{
                fontSize: 14,
                color: colors.darkGrey,
                marginTop: 0,
              }}
            >
              {title.category}
            </Paragraph>
            <Paragraph style={{ marginBottom: 0 }}>
              {title.description}
            </Paragraph>
          </View>
        )}
      </View>
    </View>
  );
};

const Glossary = ({ navigation }) => {
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

  const [filterBookmarks, setFilterBookmarks] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  // const [isSearching, setIsSearching] = useState(false);
  const [shownData, setShownData] = useState([]);
  let glossaryData = [];

  useEffect(() => {
    glossaryData = getSections(rawGlossaryData);
    setShownData(glossaryData);
  }, []);

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        {showSearch && (
          <Searchbar placeholder="Search" onChangeText={() => {}} />
        )}
        <SectionList
          sections={shownData}
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
