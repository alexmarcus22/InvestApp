import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "./createAccountStyle";
import images from "../../theme/images";
import SignupForm from "../../components/SignUpForm/signUpFormComponent";
import AppLoading from "expo-app-loading";
import FontsLoading from "../../theme/fonts";
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
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.goBack}
        >
          <Image source={images.back} style={styles.backImage} />
        </TouchableOpacity>
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
            onPress={() => navigation.navigate("Homepage")}
          >
            Already have an account?
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CreateAccount;
