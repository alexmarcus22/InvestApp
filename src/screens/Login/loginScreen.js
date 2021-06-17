import React, { useEffect } from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./loginScreenStyle";
import GoBackButton from "../../components/GoBack/goBackButton";
import LoginForm from "../../components/LoginForm/loginForm";

const LoginScreen = ({ dispatch, loading, data, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate("Homepage");
  };

  const RenderScreen = () => {
    if (loading) return <Text>Loading..</Text>;
    if (hasErrors) return <p>Unable to display.</p>;
    if (data === undefined) return null;
    return (
      <ScrollView
        style={styles.container}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
      >
        <SafeAreaView>
          <GoBackButton />
          <View style={styles.headerContainer}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.description}>{data.description}</Text>
          </View>
          <View style={styles.inputsContainer}>
            <LoginForm />
            <Text style={styles.bottomText} onPress={navigate}>
              {data.bottomText}
            </Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  };

  return <RenderScreen />;
};

const mapStateToProps = (state) => {
  return {
    loading: state.data.loading,
    data: state.data.data.loginData,
    hasErrors: state.data.hasErrors,
  };
};
const connectComponent = connect(mapStateToProps);

export default connectComponent(LoginScreen);
