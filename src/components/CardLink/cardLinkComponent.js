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
import { useNavigation } from "@react-navigation/native";

const CardLink = ({ item }) => {
  const navigation = useNavigation();
  const navigate = () => {
    navigation.navigate(item.navigateTo);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableHighlight onPress={navigate}>
        <View style={styles.card}>
          <Image source={images.contact} style={styles.imageCard} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default CardLink;
