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
import styles from "../theme/styles/CreateAccount.style";

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
          <SignupForm />
          <Text
            style={styles.bottomText}
            onPress={() => navigation.navigate("Sign Up")}
          >
            Already have an account?
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CreateAccount;
