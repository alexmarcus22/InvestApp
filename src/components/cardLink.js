import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
  return Font.loadAsync({
    SFCompact: require("../../assets/fonts/SF-Pro-Display-Regular.otf"),
  });
};

const CardLink = ({ item }) => {
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
    <SafeAreaView style={styles.container}>
      <TouchableHighlight>
        <View style={styles.card}>
          <Image
            source={require("../../assets/profile/contact.png")}
            style={styles.imageCard}
          />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    marginBottom: 20,
  },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 22,
    backgroundColor: "white",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    shadowOffset: { width: 5, height: 10 },
    shadowColor: "black",
    shadowOpacity: 0.04,
  },
  title: {
    fontSize: 17,
    color: "black",
    lineHeight: 16,
    color: "#333333",
    marginLeft: 36,
    fontFamily: "SFCompact",
    fontWeight: "bold",
  },
  imageCard: {
    width: 24,
    height: 24,
    zIndex: 1,
  },
});

export default CardLink;
