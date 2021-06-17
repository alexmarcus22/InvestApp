import React, { useState } from "react";
import { View } from "react-native";
import TextInput from "../TextInput/textInput";
import { Field, reduxForm } from "redux-form";
import SubmitButtonComponent from "../SubmitButton/submitButtonComponent";

const LoginForm = (props) => {
  const { handleSubmit } = props;
  const onSubmit = (values) => console.log(values);

  const renderInput = ({ input: { onChange, ...restInput }, secureTextEntry, placeholder }) => {
    return (
      <TextInput onChangeText={onChange} {...restInput} secureText={secureTextEntry} placeholder={placeholder} />
    );
  };

  return (
    <View>
      <Field
        name="username"
        type="text"
        component={renderInput}
        placeholder="Your username"
      />
      <Field
        name="password"
        type="password"
        component={renderInput}
        placeholder="Password"
        props={{
          secureTextEntry: true,
        }}
      />
      <SubmitButtonComponent title="Submit" onSubmit={handleSubmit(onSubmit)} />
    </View>
  );
};

export default reduxForm({ form: "test-form2" })(LoginForm);
