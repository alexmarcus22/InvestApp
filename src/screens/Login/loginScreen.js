import React, { useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./loginScreenStyle";
import GoBackButton from "../../components/GoBack/goBackButton";
import { fetchData } from "../../Redux/actions/dataAction";
import LoginForm from "../../components/LoginForm/loginForm";

const LoginScreen = ({ dispatch, loading, data, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const navigation = useNavigation();

  const submit = (values) => {
    console.log(values);
  };

  const navigate = () => {
    navigation.navigate("Homepage");
  };

  const RenderScreen = () => {
    if (loading) return <Text>Loading..</Text>;
    if (hasErrors) return <p>Unable to display.</p>;
    if (data === undefined) return null;
    return (
      <SafeAreaView style={styles.container}>
        <GoBackButton />
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>{data.description}</Text>
        </View>
        <View style={styles.inputsContainer}>
          <LoginForm onSubmit={submit} />
          <Text style={styles.bottomText} onPress={navigate}>
            {data.bottomText}
          </Text>
        </View>
      </SafeAreaView>
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
