import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { Input } from "react-native-elements";
import SubmitButtonComponent from "../components/submitButton";

const CreateAccount = ({ navigation }) => {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <SafeAreaView style={[styles.container]}>
      <Text onPress={() => navigation.goBack()} style={styles.goBack}>
        Go back
      </Text>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Create an account</Text>
        <Text style={styles.description}>
          Invest and double your income now
        </Text>
      </View>
      <View style={styles.inputsContainer}>
        <View onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <Input
            placeholder="Email Address"
            style={styles.input}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            containerStyle={{ paddingHorizontal: 0 }}
            type="email"
            name="email"
            {...register("email")}
          />
          <Input
            placeholder="Full Name"
            style={styles.input}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            containerStyle={{ paddingHorizontal: 0 }}
            type="text"
            name="fullName"
          />
          <Input
            placeholder="Password"
            style={styles.input}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            containerStyle={{ paddingHorizontal: 0 }}
            type="password"
          />
          <SubmitButtonComponent title="Create Account" submit={onSubmit} />
          <Text
            style={styles.bottomText}
            onPress={() => navigation.navigate("Home Page")}
          >
            Already have an account?
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 100,
    flexDirection: "column",
  },
  textContainer: {
    flex: 1,
  },
  inputsContainer: {
    flex: 3,
    paddingLeft: 34,
    paddingRight: 34,
  },
  input: {
    borderWidth: 1,
    borderColor: "#828282",
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 25,
    fontSize: 17,
    paddingRight: 25,
  },
  title: {
    textAlign: "center",
    fontSize: 34,
    lineHeight: 44,
    fontWeight: "700",
  },
  description: {
    textAlign: "center",
    fontSize: 17,
    lineHeight: 22,
  },
  bottomText: {
    color: "#31A062",
    fontSize: 17,
    textAlign: "center",
    marginTop: 44,
  },
  goBack: {
    position: "absolute",
    top: 5,
    left: 5,
    zIndex: 1000,
  },
});

export default CreateAccount;
