import AppLoading from "expo-app-loading";
import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import FontsLoading from "../fonts";
import { styles } from "./SubmitButton.style";
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
