import React from "react";
import { TouchableOpacity, View, Button } from "react-native";
import TextInput from "../TextInput/textInput";
import { Field, reduxForm, Form } from "redux-form";

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
      <TouchableOpacity>
        <Button title={"Submit"} onPress={handleSubmit(onSubmit)} />
      </TouchableOpacity>
    </View>
  );
};

export default reduxForm({ form: "test-form" })(SignupForm);
