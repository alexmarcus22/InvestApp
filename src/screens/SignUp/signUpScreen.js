import React, { useEffect } from "react";
import { connect } from "react-redux";
import { SafeAreaView, Image, Text } from "react-native";
import { styles } from "./signUpStyle";
import images from "../../theme/images";
import ButtonComponent from "../../components/Button/button";
import { fetchData } from "../../Redux/actions/data";
const SignUpScreen = ({ dispatch, loading, data, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

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

const mapStateToProps = (state) => {
  console.log(state);
  return {
    loading: state.data.loading,
    data: state.data.data,
    hasErrors: state.data.hasErrors,
  };
};
export default connect(mapStateToProps, null)(SignUpScreen);
