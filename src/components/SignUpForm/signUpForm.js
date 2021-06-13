import React from "react";
import { View } from "react-native";
import TextInput from "../TextInput/textInput";
import { Field, reduxForm } from "redux-form";
import SubmitButtonComponent from "../SubmitButton/submitButtonComponent";

const SignupForm = (props) => {
  const { handleSubmit } = props;

  const onSubmit = (values) => console.log(values);

  const renderField = ({
    placeholder,
    name,
    type,
    input: { onChange, ...input },
    secureTextEntry: secureTextEntry,
  }) => (
    <TextInput
      type={type}
      name={name}
      placeholder={placeholder}
      secureText={secureTextEntry}
      {...input}
      onChangeText={onChange}
    />
  );

  return (
    <View>
      <Field
        name="name"
        type="text"
        component={renderField}
        placeholder="Your name"
      />
      <Field
        name="email"
        type="email"
        component={renderField}
        placeholder="Email"
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

export default reduxForm({ form: "test-form" })(SignupForm);
