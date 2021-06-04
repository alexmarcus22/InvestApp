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
import Notification from "../../components/Notification/Notification.component";
import { styles } from "./Notification.style";
import { notificationData } from "../../theme/strings";
import images from "../../theme/images";
import FontsLoading from "../../components/fonts";

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
            <Image source={images.back} style={styles.backImage} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Notification</Text>
        </View>
        <View>
          <FlatList
            data={notificationData}
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

export default NotificationScreen;
