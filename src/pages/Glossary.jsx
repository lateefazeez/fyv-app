import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList
} from "react-native";
import Constants from "expo-constants";

const DATA = [
  {
    title: "A",
    data: ["List", "Is", "Empty"]
  },
  {
    title: "B",
    data: ["List", "Is", "Empty"]
  },
  {
    title: "C",
    data: ["List", "Is", "Empty"]
  },
  {
    title: "D",
    data: ["List", "Is", "Empty"]
  }
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
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    color: '#fff',
    fontSize: 32,
    backgroundColor: "#000000"
  },
  title: {
    fontSize: 24
  }
});

export default Glossary;

