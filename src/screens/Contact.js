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
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import ContactInput from "../components/contactInput";

const fetchFonts = () => {
  return Font.loadAsync({
    "SF-Pro-Display-Medium": require("../../assets/fonts/SF-Pro-Display-Medium.otf"),
  });
};

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

const ContactScreen = ({ navigation }) => {
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
              source={require("../../assets/contact/back.png")}
              resizeMode="contain"
              alignSelf="center"
            />
          </TouchableOpacity>
          <View style={{ flex: 11, textAlign: "center", paddingRight: 20 }}>
            <Text style={styles.headerTitle}>Contact Info</Text>
          </View>
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
  container: {
    paddingHorizontal: 30,
    paddingVertical: 63,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 50,
    alignItems: "center",
  },
  close: {
    position: "relative",
    zIndex: 10,
    width: 6,
    height: 12,
  },
  headerTitle: {
    fontFamily: "SF-Pro-Display-Medium",
    fontweight: "400",
    fontSize: 22,
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
