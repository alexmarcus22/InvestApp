import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { styles } from "./Notification.style";

const Notification = ({ item }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.imageContainer}>
        <Image source={item.bg} style={[styles.image]} />
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.dataTime}>{item.dataTime}</Text>
    </View>
  );
};

export default Notification;
