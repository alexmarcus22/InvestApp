import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import AppLoading from "expo-app-loading";
import SignupForm from "../../components/SignUpForm/signUpForm.component";
import { styles } from "./CreateAccount.style";
import images from "../../theme/images";
import FontsLoading from "../../components/fonts";

const CreateAccount = ({ navigation }) => {
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
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text onPress={() => navigation.goBack()} style={styles.goBack}>
          <Image source={images.back} style={styles.backImage} />
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
