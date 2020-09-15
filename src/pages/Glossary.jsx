import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FloatingButton from '../components/FloatingButton';
import colors from '../config/colors';

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
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Glossary = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <SectionList
          sections={sortedData}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>
      <FloatingButton onPress={() => navigation.navigate('Find Your Voice')} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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

export default Glossary;
