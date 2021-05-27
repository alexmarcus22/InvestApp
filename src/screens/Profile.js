import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  FlatList,
  TouchableOpacity,
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import CardLink from "../components/cardLink";

const fetchFonts = () => {
  return Font.loadAsync({
    "SF-Pro-Display-Medium": require("../../assets/fonts/SF-Pro-Display-Medium.otf"),
  });
};

const DATA = [
  {
    title: "Contact Info",
  },
  {
    title: "Contact Info",
  },
  {
    title: "Contact Info",
  },
  {
    title: "Contact Info",
  },
  {
    title: "Contact Info",
  },
];

const ProfileScreen = ({ navigation }) => {
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
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <TouchableHighlight style={{ paddingBottom: 24 }}>
              <Image
                source={require("../../assets/profile/back.png")}
                style={styles.backImage}
              />
            </TouchableHighlight>
            <Text style={styles.headerText}>Profile</Text>
          </View>
          <View style={styles.profile}>
            <Image
              source={require("../../assets/profile/profile.png")}
              style={styles.profileImage}
            />
            <Text style={styles.name}>Jonas Macroni</Text>
            <Text style={styles.job}>Expert</Text>
          </View>
          <View>
            <FlatList
              data={DATA}
              numColumns={1}
              renderItem={(item) => {
                return <CardLink {...item} />;
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 70,
    paddingHorizontal: 30,
    backgroundColor: "#F6F6F9",
  },
  headerContainer: {
    paddingBottom: 29,
  },
  backImage: {
    width: 6,
    height: 12,
  },
  headerText: {
    fontFamily: "SF-Pro-Display-Medium",
    fontSize: 34,
    lineHeight: 44,
  },
  profile: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  name: {
    fontFamily: "SF-Pro-Display-Medium",
    fontSize: 22,
  },
  job: {
    fontSize: 17,
  },
});

export default ProfileScreen;
