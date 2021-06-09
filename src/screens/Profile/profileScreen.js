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

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
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
              keyExtractor={(item) => item.title}
              renderItem={(item) => {
                return (
                  <CardLink
                    {...item}
                    pathToNavigate="Bank Account"
                    key={item.index}
                  />
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
