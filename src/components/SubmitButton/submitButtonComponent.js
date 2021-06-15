import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./submitButtonStyle";
const SubmitButtonComponent = ({ title, onSubmit }) => {
  return (
    <Pressable style={styles.submitButton} onPress={onSubmit}>
      <Text style={styles.textButton}>{title}</Text>
    </Pressable>
  );
};
export default SubmitButtonComponent;
