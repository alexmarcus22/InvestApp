import React from "react";
import { notificationData } from "../../theme/mockData";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { styles } from "./notificationStyle";
import images from "../../theme/images";
import Notification from "../../components/Notification/notificationComponent";
import FontsLoading from "../../components/SubmitButton/fonts";
import AppLoading from "expo-app-loading";

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
