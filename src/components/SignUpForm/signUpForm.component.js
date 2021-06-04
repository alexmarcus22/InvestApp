import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Button,
} from "react-native";
import FontsLoading from "../fonts";
import AppLoading from "expo-app-loading";
import { styles } from "./signUpForm.style";

const SignupForm = () => {
  const { dataLoaded, fetchFonts, setDataLoaded } = FontsLoading();
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
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
    <View>
      <TextInput
        id="name"
        name="name"
        type="name"
        onChange={(text) => setFullName(text)}
        defaultValue={fullName}
        style={styles.input}
        placeholder="Fullname"
      />
      <TextInput
        id="email"
        name="email"
        type="email"
        onChange={(text) => setEmailAddress(text)}
        defaultValue={emailAddress}
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        id="password"
        name="password"
        type="password"
        onChange={(text) => setPassword(text)}
        defaultValue={password}
        style={styles.input}
        placeholder="Password"
      />
      <TouchableOpacity>
        <Button type="submit" title="Create Account" />
      </TouchableOpacity>
    </View>
  );
};

export default SignupForm;
