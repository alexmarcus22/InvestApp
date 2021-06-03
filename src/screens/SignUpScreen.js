import React from "react";
import AppLoading from "expo-app-loading";
import { StyleSheet, SafeAreaView, Image, Text, View } from "react-native";
import ButtonComponent from "../components/Button";
import FontsLoading from "../components/fonts";

const SignUpScreen = () => {
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
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
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
      <ButtonComponent
        title="Create Account"
        pathToNavigate="Create Account"
      />
      <Text style={styles.noBackgroundText}>Login</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    alignItems: "stretch",
    paddingLeft: 34,
    paddingRight: 34,
  },
  logo: {
    width: 300,
    height: 273,
    alignSelf: "center",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 11,
    fontFamily: "SFMedium",
    lineHeight: 44,
    paddingHorizontal: 15,
  },
  description: {
    marginBottom: 11,
    textAlign: "center",
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
    fontFamily: "SFLight",
    fontWeight: "400",
    marginBottom: 100,
  },
  noBackgroundText: {
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
    color: "#31A062",
  },
});

export default SignUpScreen;
