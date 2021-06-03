import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
} from "react-native";
import AppLoading from "expo-app-loading";
import BankCard from "../components/bankCard";
import FontsLoading from "../components/fonts";
import ButtonComponent from "../components/Button";

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
    <SafeAreaView style={{ backgroundColor: "#F8F8F9", height: "100%" }}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={{ flex: 1 }}>
            <ImageBackground
              style={styles.close}
              source={require("../../assets/bank/back.png")}
              resizeMode="contain"
              alignSelf="center"
            />
          </TouchableOpacity>
          <View style={{ flex: 11, alignItems: "center", paddingRight: 30 }}>
            <Text style={styles.headerTitle}>Bank of account info</Text>
          </View>
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

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 63,
    height: "100%",
    backgroundColor: "#F6F6F9",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 50,
    alignItems: "center",
  },
  backImage: {
    width: 6,
    height: 12,
  },
  headerTitle: {
    fontFamily: "SFMedium",
    fontWeight: "400",
    fontSize: 22,
  },
  close: {
    position: "relative",
    zIndex: 10,
    width: 6,
    height: 12,
  },
});

export default BankAccountScreen;
