import AppLoading from "expo-app-loading";
import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView, Image, Text, View } from "react-native";
import ButtonComponent from "../components/Button";
import FontsLoading from "../components/fonts";
import styles from "../theme/styles/SignUp.style";

const SignUpScreen = ({ navigation }) => {
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
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require("../../assets/sign-up-screen/logo.png")}
          resizeMode="contain"
          alignSelf="center"
        />
        <Text style={styles.title}>Stay on top of your finance with us.</Text>
        <Text style={styles.description}>
          We are your new financial Advisors to recommed the best investments
          for you.
        </Text>
      </View>
      <ButtonComponent title="Create Account" pathToNavigate="Create Account" />
      <Text style={styles.noBackgroundText}>Login</Text>
    </SafeAreaView>
  );
};

export default SignUpScreen;
