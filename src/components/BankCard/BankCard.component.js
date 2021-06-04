import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import images from "../../theme/images";
import { styles } from "./BankCard.style";

const BankCard = ({ item }) => {
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
