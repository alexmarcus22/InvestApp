import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
} from "react-native";
import AppLoading from "expo-app-loading";
import ContactInput from "../components/contactInput";
import FontsLoading from "../components/fonts";

const DATA = [
  {
    placeHolder: "Warren Buffet",
    label: "Name",
    id: "Name",
    type: "text",
  },
  {
    placeHolder: "05 November 1993",
    label: "Birthdate",
    id: "Birthdate",
    type: "text",
  },
  {
    placeHolder: "Male",
    label: "Gender",
    id: "Gender",
    type: "text",
  },
  {
    placeHolder: "warren.buff@invest.ai",
    label: "Email",
    id: "Email",
    type: "email",
  },
  {
    placeHolder: "-",
    label: "Phone Number",
    id: "Phone Number",
    type: "text",
  },
  {
    placeHolder: "-",
    label: "Address",
    id: "Address",
    type: "adress",
  },
];

const ContactScreen = () => {
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
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.row1}>
            <ImageBackground
              style={styles.close}
              source={require("../../assets/contact/back.png")}
              resizeMode="contain"
              alignSelf="center"
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Contact Info</Text>
        </View>
        <View style={styles.profile}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/contact/profile_cover.png")}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <FlatList
              data={DATA}
              numColumns={1}
              renderItem={(item) => {
                return <ContactInput {...item} />;
              }}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outerContainer: { backgroundColor: "#F8F8F9", height: "100%" },
  innerContainer: {
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
  row1: {
    flex: 1,
  },
  close: {
    position: "relative",
    zIndex: 10,
    width: 6,
    height: 12,
  },
  headerTitle: {
    fontFamily: "SFMedium",
    fontweight: "400",
    fontSize: 22,
    flex: 11,
    textAlign: "center",
    paddingRight: 20,
  },
  profile: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    zIndex: 1,
  },
});

export default ContactScreen;
