import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
} from "react-native";
import AppLoading from "expo-app-loading";
import ContactInput from "../components/contactInput";
import FontsLoading from "../components/fonts";
import styles from "../theme/styles/Contact.style";

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

export default ContactScreen;
