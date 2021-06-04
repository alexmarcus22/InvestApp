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
} from "react-native";
import AppLoading from "expo-app-loading";
import CardLink from "../components/cardLink";
import FontsLoading from "../components/fonts";
import styles from "../theme/styles/Profile.style";

const DATA = [
  {
    title: "Contact Info",
  },
  {
    title: "Source of Funding Info",
  },
  {
    title: "Bank Account Info",
  },
  {
    title: "Document Info",
  },
  {
    title: "Settings",
  },
];

const ProfileScreen = () => {
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
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <TouchableHighlight>
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

export default ProfileScreen;
