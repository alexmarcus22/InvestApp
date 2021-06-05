import React, { useState } from "react";
import { TouchableOpacity, TextInput, View, Button } from "react-native";
import { styles } from "./signUpFormStyle";
import AppLoading from "expo-app-loading";
import FontsLoading from "../../theme/fonts";

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
        onChange={setFullName}
        defaultValue={fullName}
        style={styles.input}
        placeholder="Fullname"
      />
      <TextInput
        id="email"
        name="email"
        type="email"
        onChange={setEmailAddress}
        defaultValue={emailAddress}
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        id="password"
        name="password"
        type="password"
        onChange={setPassword}
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
