import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
} from 'react-native';

import colors from '../config/colors';

const DATA = [
  {
    title: 'A',
    data: ['List', 'Is', 'Empty'],
  },
  {
    title: 'B',
    data: ['List', 'Is', 'Empty'],
  },
  {
    title: 'C',
    data: ['List', 'Is', 'Empty'],
  },
  {
    title: 'D',
    data: ['List', 'Is', 'Empty'],
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Glossary = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

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
