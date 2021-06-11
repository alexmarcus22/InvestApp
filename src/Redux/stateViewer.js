import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const StateViewer = (props) => {
  const formState = useSelector((state) => state.form);
  const prettyFormState = JSON.stringify(formState, null, 2);
  return (
    <View style={styles.root}>
      <TextInput
        multiline
        numberOfLines={25}
        value={prettyFormState}
        disabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 2,
  },
});

export default StateViewer;
