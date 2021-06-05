import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import AppLoading from "expo-app-loading";
import { styles } from "./contactInputStyle";
import FontsLoading from "../../theme/fonts";

const ContactInput = (props) => {
  const { dataLoaded, fetchFonts, setDataLoaded } = FontsLoading();
  const { placeHolder, label, id, type } = props.item;
  const [fullName, setFullName] = useState("");
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
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        id={id}
        name="name"
        type={type}
        onChange={(text) => setFullName(text)}
        defaultValue={fullName}
        style={styles.input}
        placeholder={placeHolder}
      />
    </View>
  );
};

export default ContactInput;
