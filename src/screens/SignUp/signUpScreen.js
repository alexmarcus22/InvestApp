import React, { useEffect } from "react";
import { fetchData } from "../../Redux/actions/dataAction";
import { connect } from "react-redux";
import { SafeAreaView, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./signUpStyle";
import images from "../../theme/images";
import ButtonComponent from "../../components/Button/button";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = ({ data, hasErrors, loading, onFetchData }) => {
  useEffect(() => {
    onFetchData();
  }, []);

  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  const RenderScreen = () => {
    if (loading) return <Text>Loading..</Text>;
    if (hasErrors) return <Text>Unable to display.</Text>;
    if (data === undefined) return null;
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={images.signup_logo} />
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <ButtonComponent
          title="Create Account"
          pathToNavigate="Create Account"
        />
        <TouchableOpacity onPress={navigateToLogin}>
          <Text style={styles.noBackgroundText}>Login</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  return <RenderScreen />;
};

const mapStateToProps = (state) => {
  return {
    loading: state.data.loading,
    data: state.data.data.signUpData,
    hasErrors: state.data.hasErrors,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFetchData: () => dispatch(fetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
