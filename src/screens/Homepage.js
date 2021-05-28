import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import Card from "../components/card";
import PlanComponent from "../components/plan";
import NewsComponent from "../components/news";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const DATA = [
  {
    id: "1",
    title: "Gold",
    subtitle: "30% return",
    bg: require("../../assets/homepage/stock1.png"),
  },
  {
    id: "2",
    title: "Silver",
    subtitle: "60% return",
    bg: require("../../assets/homepage/stock2.png"),
  },
  {
    id: "3",
    title: "Platinum",
    subtitle: "70% return",
    bg: require("../../assets/homepage/stock3.png"),
  },
];

const NEWS = [
  {
    id: 1,
    title: "Basic type of investments",
    description:
      "This is how you set your foot for 2020 Stock market recession. What’s next...",
  },
  {
    id: 2,
    title: "Basic type of investments",
    description:
      "This is how you set your foot for 2020 Stock market recession. What’s next...",
  },
];

const fetchFonts = () => {
  return Font.loadAsync({
    "SF-Pro-Display-Black": require("../../assets/fonts/SF-Pro-Display-Black.otf"),
  });
};

export const HomePage = ({ navigation }) => {
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
        <View style={styles.homepage}>
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <TouchableHighlight underlayColor="transparent">
                <Image
                  style={styles.hamburger}
                  source={require("../../assets/homepage/menu.png")}
                />
              </TouchableHighlight>
              <Image
                style={styles.notification}
                source={require("../../assets/homepage/notif.png")}
                resizeMode="contain"
                alignSelf="center"
              />
            </View>
            <View style={styles.mainContainer}>
              <Text style={styles.title}>Welcome, Jessie.</Text>
              <Card
                title="Your total assets portofolio"
                value="N203,935"
                navigateTo="Assets Screen"
              ></Card>
              <View style={styles.plans}>
                <View style={styles.headerContainer}>
                  <Text style={styles.plansTitle}>Best plans.</Text>
                  <Text style={styles.plansSeeAll}>See All →</Text>
                </View>
                <SafeAreaView style={{ flexDirection: "row" }}>
                  <FlatList
                    data={DATA}
                    numColumns={DATA.length}
                    renderItem={(item) => {
                      return <PlanComponent {...item} length={DATA.length} />;
                    }}
                    style={{
                      flexDirection: "row",
                      overflow: "auto",
                      width: "100%",
                    }}
                    keyExtractor={(item) => item.id}
                  />
                </SafeAreaView>
              </View>
              <View style={styles.investContainer}>
                <Text style={styles.investTitle}>Investment Guide</Text>
                <SafeAreaView
                  style={{
                    flexDirection: "column",
                  }}
                >
                  <FlatList
                    data={NEWS}
                    numColumns={1}
                    renderItem={(item) => {
                      return <NewsComponent {...item} length={NEWS.length} />;
                    }}
                    keyExtractor={(item) => item.id.toString()}
                    showsHorizontalScrollIndicator={false}
                  />
                </SafeAreaView>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingHorizontal: 30,
    paddingVertical: 60,
  },
  headerContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 2,
  },
  investContainer: {
    flexDirection: "column",
  },
  investTitle: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "400",
    fontFamily: "SF-Pro-Display-Black",
  },
  hamburger: {
    position: "relative",
    zIndex: 1,
    width: 24,
    height: 24,
  },
  notification: {
    position: "relative",
    zIndex: 1,
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 34,
    lineHeight: 44,
    fontWeight: "400",
    marginBottom: 30,
    fontFamily: "SF-Pro-Display-Black",
  },
  mainContainer: {
    flex: 8,
    paddingTop: 2,
  },
  plans: {
    marginTop: 20,
    marginBottom: 45,
  },
  plansTitle: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: "SF-Pro-Display-Black",
  },
  plansSeeAll: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "700",
    color: "#FE555D",
    letterSpacing: 0.8,
  },
});

export default HomePage;
