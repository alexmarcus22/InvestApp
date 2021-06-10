import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./submitButtonStyle";
const SubmitButtonComponent = ({ text }) => {
  return (
    <TouchableOpacity>
      <Text style={styles.submitButton} type="submit">
        {text}
      </Text>
    </TouchableOpacity>
  );
};
export default SubmitButtonComponent;
