import React from "react";
import { TextInput } from "react-native";
import { styles } from "./textInputStyle";

const TextInputComponent = ({
  id,
  name,
  type,
  placeholder,
  secureText,
  onChangeText,
}) => {
  return (
    <TextInput
      id={id}
      name={name}
      type={type}
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureText}
      onChangeText={onChangeText}
    />
  );
};

export default TextInputComponent;
