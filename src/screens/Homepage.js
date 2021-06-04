import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import Card from "../components/card";
import PlanComponent from "../components/plan";
import NewsComponent from "../components/news";
import AppLoading from "expo-app-loading";
import FontsLoading from "../components/fonts";
import styles from "../theme/styles/Homepage.style";

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

export const HomePage = () => {
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
                <SafeAreaView style={styles.row1}>
                  <FlatList
                    data={DATA}
                    numColumns={DATA.length}
                    renderItem={(item) => {
                      return <PlanComponent {...item} length={DATA.length} />;
                    }}
                    style={styles.item}
                    keyExtractor={(item) => item.id}
                  />
                </SafeAreaView>
              </View>
              <View style={styles.investContainer}>
                <Text style={styles.investTitle}>Investment Guide</Text>
                <SafeAreaView style={styles.column1}>
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

export default HomePage;
