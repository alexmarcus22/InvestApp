import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
} from "react-native";
import AppLoading from "expo-app-loading";
import ContactInput from "../../components/ContactInput/ContactInput.component";
import { styles } from "./Contact.style";
import { contactData } from "../../theme/strings";
import images from "../../theme/images";
import FontsLoading from "../../components/fonts";
const ContactScreen = ({ navigation }) => {
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
          <TouchableOpacity style={styles.row1}>
            <ImageBackground
              style={styles.close}
              source={images.back}
              resizeMode="contain"
              alignSelf="center"
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Contact Info</Text>
        </View>
        <View style={styles.profile}>
          <TouchableOpacity>
            <Image source={images.profile_cover} style={styles.profileImage} />
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <FlatList
              data={contactData}
              numColumns={1}
              renderItem={(item) => {
                return <ContactInput {...item} />;
              }}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ContactScreen;
