import React from "react";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Card = ({ title, value }) => {
  return (
    <View>
      <LinearGradient
        // Background Linear Gradient
        colors={["#31A078", "#31A05F"]}
        style={styles.container}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.number}>{value}</Text>
        <Pressable style={styles.button} title="Invest">
          <Text>Invest</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 6,
    paddingBottom: 22,
    borderRadius: 20,
  },
  title: {
    fontSize: 14,
    color: "white",
    marginBottom: 11,
    lineHeight: 20,
  },
  number: {
    fontSize: 32,
    color: "white",
    lineHeight: 37,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FEFFFE",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    position: "absolute",
    borderRadius: 20,
    right: 10,
    bottom: 22,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
  },
});

export default Card;
