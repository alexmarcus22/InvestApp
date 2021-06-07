import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
} from "react-native";
import { styles } from "./cardLinkStyle";
import images from "../../theme/images";
import FontsLoading from "../../theme/fonts";
import AppLoading from "expo-app-loading";

const CardLink = ({ item }) => {
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
    <SafeAreaView style={styles.container}>
      <TouchableHighlight>
        <View style={styles.card}>
          <Image source={images.contact} style={styles.imageCard} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default CardLink;
