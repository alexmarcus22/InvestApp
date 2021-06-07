import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { styles } from "./buttonStyle";

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
