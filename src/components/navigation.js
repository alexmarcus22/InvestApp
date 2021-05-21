import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

const Navigation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.cell]}>
        <Image
          style={styles.img}
          source={require("../../assets/homepage/home.png")}
          resizeMode="contain"
          alignSelf="center"
        />
        <Text style={[styles.link, styles.active]}>Home</Text>
      </View>
      <View style={[styles.cell]}>
        <Image
          style={styles.img}
          source={require("../../assets/homepage/search.png")}
          resizeMode="contain"
          alignSelf="center"
        />
        <Text style={[styles.link]}>Product</Text>
      </View>
      <View style={[styles.cell]}>
        <Image
          style={styles.img}
          source={require("../../assets/homepage/transfer.png")}
          resizeMode="contain"
          alignSelf="center"
        />
        <Text style={[styles.link]}>Transfer</Text>
      </View>
      <View style={[styles.cell]}>
        <Image
          style={styles.img}
          source={require("../../assets/homepage/profile.png")}
          resizeMode="contain"
          alignSelf="center"
        />
        <Text style={[styles.link]}>Profile</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100vw",
    flexDirection: "row",
    zIndex: 1000,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#F6F6F9",
  },
  cell: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 12,
    paddingBottom: 12,
  },
  active: {
    color: "#31A063",
  },
  img: {
    height: 24,
    width: 24,
    zIndex: 1001,
  },
  link: {
    color: "#999999",
  },
});

export default Navigation;
