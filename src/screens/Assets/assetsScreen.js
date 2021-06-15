import React from "react";
import { DATA_TO_FETCH } from "../../theme/mockData";
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
import { styles } from "./assetsStyle";
import images from "../../theme/images";

const AssetsScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={styles.row1}>
              <Text style={styles.headerTitle}>My Asset</Text>
            </View>
            <TouchableHighlight style={styles.row2}>
              <ImageBackground style={styles.close} source={images.close} />
            </TouchableHighlight>
          </View>
          <View style={styles.headerContent}>
            <Text style={styles.titleContent}>Your total asset portofolio</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.valueContent}>N203,935</Text>
              <Image source={images.vote} style={styles.vote} />
              <Text style={styles.valuePercent}>+2%</Text>
            </View>
          </View>
          <View style={styles.currentPlans}>
            <Text style={styles.titlePlans}>Current Plans</Text>
            <TouchableOpacity style={styles.imageContainer}>
              <ImageBackground
                source={images.goldCard}
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
              data={DATA_TO_FETCH.assetsData}
              renderItem={({ item }) => {
                return (
                  <View>
                    <Text style={styles.historyItemTitle}>{item.title}</Text>
                    <View style={styles.historyItem}>
                      <Text style={styles.historyItemSubTitle}>
                        {item.subtitle}
                      </Text>
                      <Text style={styles.historyItemDate}>{item.date}</Text>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default AssetsScreen;
