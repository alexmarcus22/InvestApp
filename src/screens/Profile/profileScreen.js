import React from "react";
import { profileData } from "../../theme/mockData";
import {
  SafeAreaView,
  Image,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  FlatList,
} from "react-native";
import { styles } from "./profileStyle";
import CardLink from "../../components/CardLink/cardLinkComponent";
import images from "../../theme/images";
import FontsLoading from "../../components/fonts";
import AppLoading from "expo-app-loading";

const ProfileScreen = () => {
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
