import React, { useState } from "react";
import { TouchableOpacity, TextInput, View } from "react-native";
import { styles } from "./signUpFormStyle";
import SubmitButton from "../SubmitButton/submitButtonComponent";

const SignupForm = () => {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
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
        <SubmitButton text="Create Account" />
      </TouchableOpacity>
    </View>
  );
};

export default SignupForm;
