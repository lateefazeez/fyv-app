import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Text, View, SafeAreaView, SectionList, Alert } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Loading from 'components/Loading';
import GlossaryItem from 'components/GlossaryItem';
import FloatingButtonFYV from 'components/FloatingButtonFYV';
import colors from 'config/colors.json';

import sortGlossarySections from 'utils/sortGlossarySections';
import getData from 'utils/getData';

const Glossary = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [data, setData] = useState([]);
  const [shownData, setShownData] = useState([]);
  const [search, setSearch] = useState('');
  const [currentWord, setCurrentWord] = useState('');

  const handleOnExpand = ({ word }) => {
    setCurrentWord(word);
  };

  const searchData = userText => {
    setSearch(userText);

    const searchWord = userText.trim().toUpperCase();

    const foundWords = data.filter(item => {
      return item.word.toUpperCase().match(searchWord);
    });

    setShownData(sortGlossarySections(foundWords));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Back',
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
          <Icon
            name="magnify"
            size={24}
            color={colors.white}
            onPress={() => {
              setSearch('');
              setShowSearch(!showSearch);
              setShownData(sortGlossarySections(data));
            }}
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
  }, [navigation, showSearch, data]);

  useEffect(() => {
    getData('GLOSSARY').then(response => {
      if (response) {
        setData(response);
        setShownData(sortGlossarySections(response));
        setIsLoading(false);
      } else {
        Alert.alert(
          'Data not found',
          'Something went wrong. Please try again.',
        );
        navigation.goBack();
      }
    });
  }, [navigation]);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        {showSearch && (
          <Searchbar
            placeholder="Search"
            onChangeText={searchData}
            value={search}
          />
        )}
        <SectionList
          stickySectionHeadersEnabled
          sections={shownData}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <GlossaryItem
              object={item}
              handleOnExpand={handleOnExpand}
              currentWord={currentWord}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                fontWeight: 'bold',
                backgroundColor: colors.primary,
                paddingVertical: 4,
                paddingHorizontal: 24,
                borderColor: colors.mediumGrey,
                borderStyle: 'solid',
                borderBottomWidth: 1,
              }}
            >
              {title}
            </Text>
          )}
        />
      </SafeAreaView>
      <FloatingButtonFYV />
    </>
  );
};
export default Glossary;
