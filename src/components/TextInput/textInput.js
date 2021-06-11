import React from "react";
import { TextInput } from "react-native";
import { styles } from "./textInputStyle";

const TextInputComponent = ({
  id,
  name,
  type,
  placeholder,
  secureText,
  onChange,
}) => {
  return (
    <TextInput
      id={id}
      name={name}
      type={type}
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureText}
      onChangeText={onChange}
    />
  );
};

export default TextInputComponent;
