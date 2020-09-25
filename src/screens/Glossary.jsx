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
<<<<<<< HEAD
import { testAlert } from 'utils';
import colors from 'config/colors';
// import { glossary_data } from 'config/Glossary_data';
=======
import colors from 'config/colors.json';
>>>>>>> 01d431e71771873c4987ea5d4b95a544f89cf7ab

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
<<<<<<< HEAD
    title: 'C',
    data: ['Complaint', 'Consequence', 'Confidential'],
  },
  {
    title: 'D',
    data: ['Discrimination', 'Draining'],
=======
    title: 'B',
    data: ['Breaches'],
>>>>>>> 01d431e71771873c4987ea5d4b95a544f89cf7ab
  },

  {
<<<<<<< HEAD
    title: 'E',
    data: ['Ethnocultural'],
  },
  {
    title: 'I',
    data: ['insufficient', 'Isolating'],
=======
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
>>>>>>> 01d431e71771873c4987ea5d4b95a544f89cf7ab
  },
  {
    title: 'L',
    data: ['Legislation'],
  },
  {
    title: 'M',
<<<<<<< HEAD
    data: [' Male-dominated', 'Maneuver', 'Manipulation'],
=======
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
>>>>>>> 01d431e71771873c4987ea5d4b95a544f89cf7ab
  },
  {
    title: 'O',
    data: ['Obligation', 'Overwhelming']
  },
  {
    title:'R',
    data: ['Rehabilitation', 'Reprisal' ]
  },
  {
    title:'S',
    data: ['Standards']
  },
  {
    title: 'T',
    data:['Termination', 'Toxic', 'Trusted']
  },
  {
    title:'U',
    data: ['Undocumented ']
  },
  {
    title:'W',
    data:['Warrant']
  }
];

const sortedData = listData.map(item => ({
  title: item.title,
  data: item.data.sort(),
}));

<<<<<<< HEAD
const Data = listData.map(item => ({
  title: item.title,
  content: item.content,
  description: item.description,
}));

const Item = ({ title }) => (
  <RectButton onPress={testAlert}>
    <View accessible style={styles.item}>
      <Text style={styles.title}>{title}</Text>
=======
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
              padding: 16,
            }}
          >
            <Text style={styles.title}>{title}</Text>
            <Icon name="chevron-down" size={24} color={colors.darkGrey} />
          </View>
        </RectButton>

        {hiddenDescription && (
          <View
            style={{
              padding: 16,
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
                  margin: 0,
                  padding: 0,
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
            <Paragraph style={{ marginTop: 4, marginBottom: 0 }}>
              a spoken or written representation or account of a person, object,
              or event.
            </Paragraph>
          </View>
        )}
      </View>
>>>>>>> 01d431e71771873c4987ea5d4b95a544f89cf7ab
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
