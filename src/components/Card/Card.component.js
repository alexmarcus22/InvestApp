import React from "react";
import { StyleSheet, Text, View, Button, Pressable, TouchableHighlight } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./Card.style";

const Card = ({ title, value, navigateTo }) => {
  return (
    <View>
      <LinearGradient
        colors={["#31A078", "#31A05F"]}
        style={styles.container}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.number}>{value}</Text>
        <Pressable style={styles.button} title="Invest">
          <TouchableHighlight onPress={() => navigation.navigate(navigateTo)}>
            <Text>Invest</Text>
          </TouchableHighlight>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

export default Card;
