import React from "react";
import { Text, StyleSheet } from "react-native";

const ButtonComponent = ({ title, navigation, pathToNavigate }) => {
  return (
    <Text
      style={button.style}
      onPress={() => navigation.navigate(pathToNavigate)}
    >
      {title}
    </Text>
  );
};

export const button = StyleSheet.create({
  style: {
    borderColor: "red",
    textAlign: "center",
    backgroundColor: "#31A062",
    borderRadius: 20,
    width: "100%",
    alignSelf: "stretch",
    color: "white",
    paddingTop: 14,
    paddingBottom: 14,
    lineHeight: 20,
  },
});

export default ButtonComponent;
