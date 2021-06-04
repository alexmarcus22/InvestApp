import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  FlatList,
} from "react-native";
import AppLoading from "expo-app-loading";
import CardLink from "../../components/CardLink/CardLink.component";
import { styles } from "./Profile.style";
import images from "../../theme/images";
import FontsLoading from "../../components/fonts";
import { profileData } from "../../theme/strings";

const ProfileScreen = ({ navigation }) => {
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
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <TouchableHighlight>
              <Image source={images.back} style={styles.backImage} />
            </TouchableHighlight>
            <Text style={styles.headerText}>Profile</Text>
          </View>
          <View style={styles.profile}>
            <Image
              source={images.profile_nocover}
              style={styles.profileImage}
            />
            <Text style={styles.name}>Jonas Macroni</Text>
            <Text style={styles.job}>Expert</Text>
          </View>
          <View>
            <FlatList
              data={profileData}
              numColumns={1}
              renderItem={(item) => {
                return <CardLink {...item} />;
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ProfileScreen;
