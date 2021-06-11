import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./buttonStyle";

const ButtonComponent = ({ title, pathToNavigate }) => {
  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate(pathToNavigate);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={navigate} onP>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
