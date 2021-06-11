import React from "react";
import { Text, TouchableOpacity, Button } from "react-native";
import { styles } from "./submitButtonStyle";
const SubmitButtonComponent = ({ text }) => {
  const onSubmit = (values) => console.log(values);
  return (
    <TouchableOpacity>
      <Button style={styles.submitButton} type="submit" onPress={onSubmit}>
        {text}
      </Button>
    </TouchableOpacity>
  );
};
export default SubmitButtonComponent;
