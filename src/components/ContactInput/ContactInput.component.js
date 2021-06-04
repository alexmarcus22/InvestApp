import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  Text,
} from "react-native";
import AppLoading from "expo-app-loading";
import { styles } from "./ContactInput.style";
import FontsLoading from "../fonts";

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
      {/* <TouchableOpacity>
        <Text>Change</Text>
      </TouchableOpacity> */}
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
