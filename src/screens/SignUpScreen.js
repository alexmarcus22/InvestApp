import React from "react";
import { StyleSheet, SafeAreaView, Image, Text, View } from "react-native";
import ButtonComponent from "../components/Button";

const SignUpScreen = ({ navigation }) => {
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
          Stay on top of your finance with us.
        </Text>
      </View>
      <ButtonComponent
        title="Create Account"
        navigation={navigation}
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
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 11,
  },
  description: {
    marginBottom: 11,
    textAlign: "center",
  },
  noBackgroundText: {
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
    color: "#31A062",
  },
});

export default SignUpScreen;
