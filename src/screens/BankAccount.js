import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import AppLoading from "expo-app-loading";
import BankCard from "../components/bankCard";
import FontsLoading from "../components/fonts";
import ButtonComponent from "../components/Button";
import styles from "../theme/styles/BankAccount.style";

const DATA = [
  {
    id: "1",
    title: "Bank of Amrica - 0182128xxx",
    bg: require("../../assets/bank/1.png"),
  },
  {
    id: "2",
    title: "Zenith Bank - 0182128xxx",
    bg: require("../../assets/bank/2.png"),
  },
];

const BankAccountScreen = () => {
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
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <ImageBackground
              style={styles.close}
              source={require("../../assets/bank/back.png")}
              resizeMode="contain"
              alignSelf="center"
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Bank of account info</Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={(item) => {
            return <BankCard {...item} />;
          }}
        />
        <View>
          <ButtonComponent
            title="Create Account"
            pathToNavigate="Create Account"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default BankAccountScreen;
