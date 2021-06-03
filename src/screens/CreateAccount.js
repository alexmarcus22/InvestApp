import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import FontsLoading from "../components/fonts";
import AppLoading from "expo-app-loading";
import SignupForm from "../components/SignUp/sign-up-form.component";
import { useNavigation } from "@react-navigation/native";

const CreateAccount = () => {
  const { dataLoaded, fetchFonts, setDataLoaded } = FontsLoading();
  const navigation = useNavigation();
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
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text onPress={() => navigation.goBack()} style={styles.goBack}>
          <Image
            source={require("../../assets/account/back.png")}
            style={styles.backImage}
          />
        </Text>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Create an account</Text>
          <Text style={styles.description}>
            Invest and double your income now
          </Text>
        </View>
        <View style={styles.inputsContainer}>
          <View style={{ width: "100%" }}>
            <SignupForm />
            <Text
              style={styles.bottomText}
              onPress={() => navigation.navigate("Sign Up")}
            >
              Already have an account?
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingRight: 35,
    paddingLeft: 35,
    flexDirection: "column",
  },
  headerContainer: {
    flex: 1,
    marginBottom: 86,
  },
  backImage: {
    width: 6,
    height: 12,
    zIndex: 1,
  },
  inputsContainer: {
    flex: 3,
    width: "100%",
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
    fontFamily: "SFLight",
    maxWidth: "100%",
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 18,
  },
  title: {
    textAlign: "center",
    fontSize: 34,
    lineHeight: 44,
    fontWeight: "700",
    fontFamily: "SFMedium",
  },
  description: {
    textAlign: "center",
    fontSize: 17,
    lineHeight: 22,
    fontFamily: "SFLight",
  },
  bottomText: {
    color: "#31A062",
    fontSize: 17,
    textAlign: "center",
    marginTop: 44,
    fontFamily: "SFLight",
  },
  goBack: {
    marginBottom: 10,
  },
});

export default CreateAccount;
