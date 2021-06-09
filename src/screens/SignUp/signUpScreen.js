import React from "react";
import { SafeAreaView, Image, Text } from "react-native";
import { styles } from "./signUpStyle";
import FontsLoading from "../../theme/fonts";
import images from "../../theme/images";
import ButtonComponent from "../../components/Button/buttonComponent";
import AppLoading from "expo-app-loading";

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
      <Image style={styles.logo} source={images.signup_logo} />
      <Text style={styles.title}>Stay on top of your finance with us.</Text>
      <Text style={styles.description}>
        We are your new financial Advisors to recommed the best investments for
        you.
      </Text>
      <ButtonComponent title="Create Account" pathToNavigate="Create Account" />
      <Text style={styles.noBackgroundText}>Login</Text>
    </SafeAreaView>
  );
};

export default SignUpScreen;
