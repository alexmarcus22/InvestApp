import AppLoading from "expo-app-loading";
import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import FontsLoading from "./fonts";

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

const styles = StyleSheet.create({
  submitButton: {
    textAlign: "center",
    borderWidth: 0,
    backgroundColor: "#31A062",
    borderRadius: 20,
    color: "white",
    paddingTop: 20,
    paddingBottom: 20,
    width: "100%",
    fontSize: 17,
    fontFamily: "SFRegular",
  },
});

export default SubmitButtonComponent;
