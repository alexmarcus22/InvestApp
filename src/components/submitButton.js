import React from "react";
import { Text, StyleSheet } from "react-native";

const SubmitButtonComponent = ({ title }) => {
  return (
    <Text
      style={{
        textAlign: "center",
        borderWidth: 0,
        backgroundColor: "#31A062",
        borderRadius: 20,
        color: "white",
        paddingTop: 20,
        paddingBottom: 20,
        width: "100%",
      }}
    >
      {title}
    </Text>
  );
};

export default SubmitButtonComponent;
