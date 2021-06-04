import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { styles } from "./News.style";

const Item = ({ item }) => (
  <View style={styles.item} onPress={() => navigation.navigate("Sign Up")}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.description}>{item.description}</Text>
  </View>
);

const NewsComponent = ({ item }) => {
  return <Item item={item} />;
};

export default NewsComponent;
