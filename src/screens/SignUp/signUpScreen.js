import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";
import { styles } from "./signUpStyle";
import images from "../../theme/images";
import ButtonComponent from "../../components/Button/button";
import { useNavigation } from "@react-navigation/native";
import getList from "../../Redux/app.actions";

const SignUpScreen = (props) => {
  const navigation = useNavigation();
  const page = "signUpScreen";

  const { error, loading, data, getList } = props;

  useEffect(() => {
    getList();
  }, [getList]);

  const RenderScreen = () => {
    if (loading) return <Text>Loading..</Text>;
    if (error) return <Text>Unable to display.</Text>;
    if (data === undefined) return null;
    console.log("States after request: ", data);
    return (
      <ScrollView style={styles.container}>
        <SafeAreaView>
          <Image style={styles.logo} source={images.signup_logo} />
          <Text style={styles.title}>asdasdas</Text>
          <Text style={styles.description}>asdsaasd</Text>
          <ButtonComponent
            title="Create Account"
            pathToNavigate="Create Account"
          />
          <TouchableOpacity>
            <Text style={styles.noBackgroundText}>Login</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    );
  };

  return <RenderScreen />;
};

const mapStateToProps = (state) => {
  console.log("State from: SignUpScreen ");
  return {
    data: state.Reducer.data.data,
    loading: state.Reducer.loading,
    error: state.Reducer.error,
  };
};

const mapDispatchToProps = {
  getList,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
