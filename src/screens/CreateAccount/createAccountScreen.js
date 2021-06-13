import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./createAccountStyle";
import SignupForm from "../../components/SignUpForm/signUpForm";
import GoBackButton from "../../components/GoBack/goBackButton";
import StateViewer from "../../Redux/stateViewer";

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
        {/* <StateViewer /> */}
        <Text style={styles.bottomText} onPress={navigate}>
          Already have an account?
        </Text>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => state;
const mapDispatch = (dispatch) => ({});
const connectComponent = connect(mapStateToProps, mapDispatch);

export default connectComponent(CreateAccount);
