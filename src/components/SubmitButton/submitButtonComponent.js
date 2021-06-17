import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./submitButtonStyle";
const SubmitButtonComponent = ({ title, onSubmit }) => {
  return (
    <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};
export default SubmitButtonComponent;
