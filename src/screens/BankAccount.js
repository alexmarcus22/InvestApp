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
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import BankCard from "../components/bankCard";

const fetchFonts = () => {
  return Font.loadAsync({
    "SF-Pro-Display-Medium": require("../../assets/fonts/SF-Pro-Display-Medium.otf"),
  });
};

const DATA = [
  {
    id: "1",
    title: "Apple stocks just increased. Check it now",
    dataTime: "15 min ago",
    bg: "1.png",
  },
  {
    id: "2",
    title: "Apple stocks just increased. Check it now",
    dataTime: "15 min ago",
    bg: "2.png",
  },
];

const BankAccountScreen = ({ navigation }) => {
  const [dataLoaded, setDataLoaded] = useState(false);

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
          <View style={{ flex: 11, textAlign: "center", paddingRight: 20 }}>
            <Text style={styles.headerTitle}>Contact Info</Text>
          </View>
        </View>
        <FlatList
          data={DATA}
          renderItem={(item) => {
            return <BankCard />;
          }}
        />
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
    fontFamily: "SF-Pro-Display-Medium",
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
