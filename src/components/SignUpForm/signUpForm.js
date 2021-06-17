import React, { useState } from "react";
import { View } from "react-native";
import TextInput from "../TextInput/textInput";
import SubmitButtonComponent from "../SubmitButton/submitButtonComponent";

const SignupForm = (props) => {
  const { handleSubmit } = props;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(props);

  const onSubmit = (values) => console.log(values);
  return (
    <View>
      <TextInput
        name="name"
        type="text"
        placeholder="Your name"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        name="email"
        type="email"
        placeholder="Email"
        onChangeText={setEmail}
        value={username}
      />
      <TextInput
        name="password"
        type="password"
        placeholder="Password"
        onChangeText={setPassword}
        value={username}
        secureText
      />
      <SubmitButtonComponent title="Submit" onSubmit={handleSubmit(onSubmit)} />
    </View>
  );
};

export default SignupForm;
