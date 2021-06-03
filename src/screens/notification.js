import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import AppLoading from "expo-app-loading";
import Notification from "../components/notification";
import FontsLoading from "../components/fonts";

const DATA = [
  {
    id: "1",
    title: "Apple stocks just increased. Check it now",
    dataTime: "15 min ago",
    bg: require("../../assets/notifications/1.png"),
  },
  {
    id: "2",
    title: "Apple stocks just increased. Check it now",
    dataTime: "15 min ago",
    bg: require("../../assets/notifications/2.png"),
  },
  {
    id: "3",
    title: "Apple stocks just increased. Check it now",
    dataTime: "15 min ago",
    bg: require("../../assets/notifications/3.png"),
  },
];

const NotificationScreen = () => {
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
          <TouchableOpacity>
            <Image
              source={require("../../assets/profile/back.png")}
              style={styles.backImage}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Notification</Text>
        </View>
        <View>
          <FlatList
            data={DATA}
            numColumns={1}
            renderItem={(item) => {
              return <Notification {...item} />;
            }}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
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
  },
  headerContainer: {
    paddingBottom: 29,
  },
  backImage: {
    width: 6,
    height: 12,
    marginBottom: 24,
  },
  headerText: {
    fontFamily: "SFMedium",
    fontSize: 34,
    lineHeight: 44,
  },
});

export default NotificationScreen;
