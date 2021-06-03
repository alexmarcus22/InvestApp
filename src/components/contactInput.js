import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import AppLoading from "expo-app-loading";

const ContactInput = (props) => {
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
    <Container>
      <TouchableOpacity>
        <ChangeText>Change</ChangeText>
      </TouchableOpacity>
      <Input
        id={id}
        type={type}
        name={label}
        placeholder={placeHolder}
        readOnly
      />
      <Label>{label}</Label>
    </Container>
  );
};

export default ContactInput;
