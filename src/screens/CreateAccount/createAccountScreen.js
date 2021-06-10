import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./createAccountStyle";
import SignupForm from "../../components/SignUpForm/signUpFormComponent";
import GoBackButton from "../../components/GoBack/goBackButton";

const CreateAccount = () => {
  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate("Homepage");
  };
  return (
    <SafeAreaView style={styles.container}>
      <GoBackButton />
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Create an account</Text>
        <Text style={styles.description}>
          Invest and double your income now
        </Text>
      </View>
      <View style={styles.inputsContainer}>
        <SignupForm />
        <Text style={styles.bottomText} onPress={navigate}>
          Already have an account?
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CreateAccount;
