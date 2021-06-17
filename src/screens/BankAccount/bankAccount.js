import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Text, View, SafeAreaView, FlatList } from "react-native";
import { styles } from "./bankAccountStyle";
import ButtonComponent from "../../components/Button/button";
import BankCard from "../../components/BankCard/bankCard";
import GoBackButton from "../../components/GoBack/goBackButton";
import images from "../../theme/images";

const BankAccountScreen = ({ dispatch, loading, data, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchData);
  });

  const RenderScreen = () => {
    if (loading) return <Text>Loading..</Text>;
    if (hasErrors) return <p>Unable to display.</p>;
    if (data === undefined) return null;
    return (
      <SafeAreaView style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <GoBackButton />
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Bank of account info</Text>
          </View>
          <FlatList
            data={data}
            renderItem={(item) => {
              return <BankCard {...item} />;
            }}
          />
          <View>
            <ButtonComponent
              title="Add Account"
              pathToNavigate="Create Account"
            />
          </View>
        </View>
      </SafeAreaView>
    );
  };

  return <RenderScreen />;
};

const mapStateToProps = (state) => {
  return {
    loading: state.data.loading,
    data: state.data.data.bankData,
    hasErrors: state.data.hasErrors,
  };
};
const connectComponent = connect(mapStateToProps);

export default connectComponent(BankAccountScreen);
