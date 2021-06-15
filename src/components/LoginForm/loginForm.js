import React, { useState } from "react";
import { View } from "react-native";
import TextInput from "../TextInput/textInput";
import { Field, reduxForm } from "redux-form";
import SubmitButtonComponent from "../SubmitButton/submitButtonComponent";

const LoginForm = (props) => {
  const { handleSubmit } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (values) => console.log(values);

  const onChange = (value) => {
    setUsername(value);
  };

  const renderField = ({
    placeholder,
    name,
    type,
    secureTextEntry,
    value,
    input: { ...input },
  }) => (
    <TextInput
      {...input}
      type={type}
      name={name}
      placeholder={placeholder}
      secureText={secureTextEntry}
      onChangeText={(value) => onChange(value)}
    />
  );

  return (
    <View>
      <Field
        name="username"
        type="text"
        component={renderField}
        placeholder="Your username"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        placeholder="Password"
        props={{
          secureTextEntry: true,
        }}
      />
      <SubmitButtonComponent title="Submit" onSubmit={handleSubmit(onSubmit)} />
    </View>
  );
};

export default reduxForm({ form: "test-form" })(LoginForm);
