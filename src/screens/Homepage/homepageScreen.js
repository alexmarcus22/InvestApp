import React from "react";
import { DATA_TO_FETCH } from "../../theme/mockData";
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { styles } from "./homepageStyle";
import images from "../../theme/images";
import NewsComponent from "../../components/News/newsComponent";
import PlanComponent from "../../components/Plan/planComponent";
import Card from "../../components/Card/cardComponent";

export const HomePage = () => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
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
            navigateTo="Assets"
          ></Card>
          <View style={styles.plans}>
            <View style={styles.headerContainer}>
              <Text style={styles.plansTitle}>Best plans.</Text>
              <Text style={styles.plansSeeAll}>See All →</Text>
            </View>
            <SafeAreaView style={styles.row1}>
              <FlatList
                data={DATA_TO_FETCH.homePageData}
                numColumns={DATA_TO_FETCH.homePageData.length}
                renderItem={(item) => {
                  return (
                    <PlanComponent
                      {...item}
                      length={DATA_TO_FETCH.homePageData.length}
                    />
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
                data={DATA_TO_FETCH.homePageNews}
                numColumns={1}
                renderItem={(item) => {
                  return (
                    <NewsComponent
                      {...item}
                      length={DATA_TO_FETCH.homePageNews.length}
                    />
                  );
                }}
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
              />
            </SafeAreaView>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomePage;
