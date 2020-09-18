import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RectButton } from 'react-native-gesture-handler';

import FloatingButtonFYV from 'components/FloatingButtonFYV';
import { testAlert } from 'utils';
import colors from 'config/colors';
//import  Glossary_data  from 'config/Glossary_data';

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar placeholder="Search"
    onChangeText={onChangeSearch}
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

const Glossary = () => {
  return (
    <>
   

      <SafeAreaView style={{ flex: 1 }}>
        <MyComponent></MyComponent>
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


