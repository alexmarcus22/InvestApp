import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./submitButtonStyle";
import AppLoading from "expo-app-loading";
import FontsLoading from "../../theme/fonts";
const SubmitButtonComponent = ({ text }) => {
  const { dataLoaded, fetchFonts, setDataLoaded } = FontsLoading();
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <TouchableOpacity>
      <Text style={styles.submitButton} type="submit">
        {text}
      </Text>
    </TouchableOpacity>
  );
};
export default SubmitButtonComponent;
