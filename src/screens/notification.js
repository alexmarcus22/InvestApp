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
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Notification from "../components/notification";

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
  {
    id: "3",
    title: "Apple stocks just increased. Check it now",
    dataTime: "15 min ago",
    bg: "3.png",
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
          <TouchableOpacity style={{ paddingBottom: 24 }}>
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
  container: {
    paddingHorizontal: 30,
    paddingVertical: 63,
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
});

export default ContactScreen;
