import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import Card from "../components/card";
import PlanComponent from "../components/plan";
import NewsComponent from "../components/news";
import Navigation from "../components/navigation";

const DATA = [
  {
    id: "1",
    title: "Gold",
    subtitle: "30% return",
    bg1: "#F0C735",
    bg2: "#D98F39",
  },
  {
    id: "2",
    title: "Silver",
    subtitle: "60% return",
    bg1: "#CAC9C9",
    bg2: "#979797",
  },
  {
    id: "3",
    title: "Platinum",
    subtitle: "70% return",
    bg1: "#BA8DF3",
    bg2: "#615EE2",
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

const Homepage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.hamburger}
          source={require("../../assets/homepage/menu.png")}
        />
        <Image
          style={styles.notification}
          source={require("../../assets/homepage/notif.png")}
          resizeMode="contain"
          alignSelf="center"
        />
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Welcome, Jessie.</Text>
        <Card title="Your total assetp portofolio" value="N203,935"></Card>
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
              style={{ flexDirection: "row", overflow: "auto", width: "100%" }}
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
            />
          </SafeAreaView>
        </View>
      </View>
      <Navigation></Navigation>
    </View>
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
    fontWeight: "700",
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
    fontWeight: "700",
    marginBottom: 30,
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
  },
  plansSeeAll: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "700",
    color: "#FE555D",
    letterSpacing: 0.8,
  },
});

export default Homepage;
