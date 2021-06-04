import React from "react";
import {
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
import AppLoading from "expo-app-loading";
import FontsLoading from "../components/fonts";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/Assets.style";
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

const AssetsScreen = () => {
  const { dataLoaded, fetchFonts, setDataLoaded } = FontsLoading();
  const navigation = useNavigation();
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
            <View style={{ flex: 11, alignItems: "center" }}>
              <Text style={styles.headerTitle}>My Asset</Text>
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
            <TouchableOpacity style={styles.imageContainer}>
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

export default AssetsScreen;
