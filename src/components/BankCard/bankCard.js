import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { styles } from "./bankCardStyle";
import images from "../../theme/images";

const BankCard = ({ item }) => {
  console.log(item.bg);
  return (
    <SafeAreaView style={styles.bankContainer}>
      <TouchableHighlight>
        <View style={styles.bankCard}>
          <Image source={item.bg} style={styles.bankImage} />
          <View style={styles.bankDescription}>
            <Text style={styles.bankTitle} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.name}>Jonas Macroni</Text>
          </View>
          <TouchableOpacity style={styles.dotsContent}>
            <Image source={images.dots} style={styles.dots} />
          </TouchableOpacity>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
};
export default BankCard;
