import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Item = ({ item, length }) => (
  <TouchableOpacity>
    <LinearGradient
      colors={[item.bg1, item.bg2]}
      style={[
        styles.item,
        item.id == length ? { marginRight: 0 } : { marginRight: 20 },
      ]}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

const PlanComponent = ({ item, length }) => {
  return <Item item={item} length={length} />;
};

const styles = StyleSheet.create({
  item: {
    borderRadius: 20,
    paddingBottom: 100,
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  title: {
    fontSize: 17,
    lineHeight: 24,
    color: "white",
  },
  subtitle: {
    fontSize: 13,
    lineHeight: 24,
    opacity: 1,
  },
});

export default PlanComponent;
