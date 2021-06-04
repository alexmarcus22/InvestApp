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
import { styles } from "./Homepage.style";
import Card from "../../components/Card/Card.component";
import PlanComponent from "../../components/Plan/Plan.component";
import NewsComponent from "../../components/News/News.component";
import AppLoading from "expo-app-loading";
import images from "../../theme/images";
import FontsLoading from "../../components/fonts";
import { homePageData, homePageNews } from "../../theme/strings";

export const HomePage = ({ navigation }) => {
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
                <Image style={styles.hamburger} source={images.menu} />
              </TouchableHighlight>
              <Image
                style={styles.notification}
                source={images.notification}
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
                    data={homePageData}
                    numColumns={homePageData.length}
                    renderItem={(item) => {
                      return (
                        <PlanComponent {...item} length={homePageData.length} />
                      );
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
                    data={homePageNews}
                    numColumns={1}
                    renderItem={(item) => {
                      return (
                        <NewsComponent {...item} length={homePageNews.length} />
                      );
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
