import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
  return Font.loadAsync({
    "SF-Pro-Display-Light": require("../../assets/fonts/SF-Pro-Display-Light.otf"),
  });
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 10px;
`;

const Label = styled.label`
  color: black;
  font-weight: normal;
  opacity: 1;
  order: 1;
  padding-bottom: 12px;
  font-size: 12px;
  line-height: 16px;
  pointer-events: none;
  text-shadow: none;
  text-transform: capitalize;
  transform-origin: left top;
  transform: scale(1) translate3d(0, 22px, 0);
  transition: 200ms ease all;
  font-family: "SF-Pro-Display-Light";
  font-weight: 500;
`;

const Input = styled.input`
  border-radius: 0;
  display: flex;
  font-size: 100%;
  line-height: 25px;
  text-shadow: none;
  border: 0;
  border-bottom: 0.5px solid #000000;
  color: black;
  flex: 1 1 auto;
  order: 2;
  background-color: transparent;
  padding: 7px 16px 12px 0;
  font-family: "SF-Pro-Display-Light";

  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: black;
    opacity: 1;
    font-family: "SF-Pro-Display-Light";
    font-weight: 700;
    font-size: 17px;
  }
  // &:focus + ${Label} {
  //   color: #3949ab;
  //   opacity: 1;
  //   transform: scale(0.8) translate3d(0, 5px, 0);
  // }
`;

const ChangeText = styled.div`
  position: absolute;
  top: 40px;
  right: 15px;
  font-family: "SF-Pro-Display-Light";
  font-weight: 700;
  color: #31a05f;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.01em;
`;

const ContactInput = (props) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const { id, label, placeHolder, type } = props.item;

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
