import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const DATA = [
  {
    id: "1",
    title: "Rp 200.000",
    subtitle: "Buy “APPL” Stock",
    date: "TUE 22 Jun 2020",
  },
  {
    id: "2",
    title: "Rp 150.000",
    subtitle: "Buy “APPL” Stock",
    date: "TUE 22 Jun 2020",
  },
  {
    id: "3",
    title: "Rp 1.000.000",
    subtitle: "Buy “APPL” Stock",
    date: "TUE 22 Jun 2020",
  },
];

const fetchFonts = () => {
  return Font.loadAsync({
    "SF-Pro-Display-Medium": require("../../assets/fonts/SF-Pro-Display-Medium.otf"),
  });
};

const AssetsScreen = ({ navigation }) => {
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
            <View style={{ flex: 11, textAlign: "center", paddingLeft: 20 }}>
              <Text style={styles.headerTitle}>Test</Text>
            </View>
            <TouchableHighlight style={{ flex: 1 }}>
              <ImageBackground
                style={styles.close}
                source={require("../../assets/assets/close.png")}
                resizeMode="contain"
                alignSelf="center"
              />
            </TouchableHighlight>
          </View>
          <View style={styles.headerContent}>
            <Text style={styles.titleContent}>Your total asset portofolio</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.valueContent}>N203,935</Text>
              <Image
                source={require("../../assets/assets/vote.png")}
                style={styles.vote}
              />
              <Text style={styles.valuePercent}>+2%</Text>
            </View>
          </View>
          <View style={styles.currentPlans}>
            <Text style={styles.titlePlans}>Current Plans</Text>
            <TouchableOpacity>
              <ImageBackground
                source={require("../../assets/assets/gold.png")}
                style={styles.imagePlans}
              >
                <Text style={styles.imagePlansTitle}>Gold</Text>
                <Text style={styles.imagePlansSubTitle}>30% return</Text>
              </ImageBackground>
            </TouchableOpacity>
            <Text style={styles.allPlans}>See all plans →</Text>
          </View>
          <View style={styles.history}>
            <Text style={styles.historyTitle}>History</Text>
            <FlatList
              data={DATA}
              renderItem={({ item }) => {
                return (
                  <View>
                    <Text style={styles.historyItemTitle}>{item.title}</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 10,
                        paddingBottom: 15,
                        borderBottomWidth: 1,
                        borderBottomColor: "#E7E7E7",
                      }}
                    >
                      <Text style={{ color: "#B2B2B2" }}>{item.subtitle}</Text>
                      <Text style={{ color: "#B2B2B2" }}>{item.date}</Text>
                    </View>
                  </View>
                );
              }}
              numColumns={1}
              keyExtractor={(item) => item.id.toString()}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 26,
    paddingHorizontal: 30,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  close: {
    position: "relative",
    zIndex: 1,
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontFamily: "SF-Pro-Display-Medium",
    fontweight: "400",
    fontSize: 22,
  },
  headerContent: {
    marginBottom: 30,
  },
  titleContent: {
    fontSize: 16,
    fontFamily: "SF-Pro-Display-Medium",
    fontweight: "300",
    color: "#B2B2B2",
    marginBottom: 8,
  },
  valueContent: {
    fontSize: 32,
    fontFamily: "SF-Pro-Display-Medium",
    fontweight: "600",
  },
  vote: {
    position: "relative",
    zIndex: 1,
    width: 16,
    height: 16,
    marginLeft: 40,
  },
  valuePercent: {
    fontSize: 11,
    color: "#00B907",
  },
  currentPlans: {
    marginTop: 13,
    marginBottom: 30,
  },
  titlePlans: {
    fontSize: 22,
    lineHeight: 28,
    marginBottom: 20,
    fontWeight: "bold",
    fontFamily: "SF-Pro-Display-Medium",
  },
  imagePlans: {
    borderRadius: 20,
    paddingBottom: 90,
    marginBottom: 10,
    paddingTop: 43,
    paddingRight: 28,
    paddingLeft: 28,
  },
  imagePlansTitle: {
    fontSize: 18,
    lineHeight: 24,
  },
  allPlans: {
    letterSpacing: "0.8px",
    lineHeight: 28,
    fontWeight: "500",
    fontSize: 18,
    color: "#FE555D",
    textAlign: "center",
  },
  historyTitle: {
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: "0.8px",
    marginBottom: 20,
  },
  historyItemTitle: {
    fontFamily: "SF-Pro-Display-Medium",
    fontSize: 18,
    fontweight: "bold",
    lineHeight: 28,
  },
});

export default AssetsScreen;
