import React from "react";
import { useFormik } from "formik";
import { StyleSheet, TouchableOpacity } from "react-native";
import styled from "styled-components";
import FontsLoading from "../fonts";
import AppLoading from "expo-app-loading";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { dataLoaded, fetchFonts, setDataLoaded } = FontsLoading();
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
    <form
      onSubmit={formik.handleSubmit}
      style={{ width: "100%", display: "flex", flexDirection: "column" }}
    >
      {/* <InputText
        id="name"
        name="name"
        type="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        style={{ flex: 1 }}
        placeholder="Fullname"
      />
      <InputText
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        style={{ flex: 1 }}
        placeholder="Email"
      />
      <InputText
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        style={{ flex: 1 }}
        placeholder="Password"
      /> */}
      <TouchableOpacity>
        {/* <SubmitButton type="submit">Create Account</SubmitButton> */}
      </TouchableOpacity>
    </form>
  );
};

export default SignupForm;
