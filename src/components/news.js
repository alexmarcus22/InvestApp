import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Item = ({ item }) => (
  <View style={styles.item} onPress={() => navigation.navigate("Sign Up")}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.description}>{item.description}</Text>
  </View>
);

const NewsComponent = ({ item }) => {
  return <Item item={item} />;
};

const styles = StyleSheet.create({
  item: {
    maxHeight: 92,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(74,74,74, 0.2)",
  },
  title: {
    fontSize: 18,
    lineHeight: 28,
    color: "#474747",
    letterSpacing: 0.8,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    maxWidth: 260,
    color: "#474747",
    letterSpacing: 0.8,
  },
});
export default NewsComponent;
