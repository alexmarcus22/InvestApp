import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, StyleSheet } from "react-native";
import { styles } from "./Button.style";

const ButtonComponent = ({ title, pathToNavigate }) => {
  const navigation = useNavigation();
  return (
    <Text
      style={styles.button}
      onPress={() => navigation.navigate(pathToNavigate)}
    >
      {title}
    </Text>
  );
};

export default ButtonComponent;
