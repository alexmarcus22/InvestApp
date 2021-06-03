import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const Notification = ({ item }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity style={{ paddingRight: 13 }}>
        <Image source={item.bg} style={[styles.image]} />
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.dataTime}>{item.dataTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.5)",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    paddingBottom: 23,
  },
  title: {
    fontSize: 17,
    lineHeight: 20,
    color: "#474747",
    paddingBottom: 20,
    paddingTop: 8,
    paddingRight: 30,
    maxWidth: "65%",
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    maxWidth: 260,
    color: "#474747",
    letterSpacing: 0.8,
  },
  image: {
    width: 70,
    height: 70,
  },
  dataTime: {
    position: "absolute",
    right: 0,
    top: 0,
    color: "black",
    opacity: 0.6,
  },
});

export default Notification;
