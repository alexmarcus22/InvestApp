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

const BankCard = () => {
  return (
    <SafeAreaView style={styles.bankContainer}>
      <TouchableHighlight>
        <View style={styles.bankCard}>
          <Image
            source={require("../../assets/bank/1.png")}
            style={styles.bankImage}
          />
          <View style={styles.bankDescription}>
            <Text style={styles.bankTitle}>Bank Of America</Text>
            <Text style={styles.name}>Jonas Macroni</Text>
          </View>
          <TouchableOpacity
            style={styles.dotsContent}
            onPress={() => console.log("e")}
          >
            <Image
              source={require("../../assets/bank/dots.png")}
              style={styles.dots}
            />
          </TouchableOpacity>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bankContainer: {
    backgroundColor: "white",
    marginBottom: 30,
    borderRadius: 20,
  },
  bankCard: {
    paddingHorizontal: 18,
    paddingVertical: 32,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    shadowOffset: { width: 5, height: 10 },
    shadowColor: "black",
    shadowOpacity: 0.04,
  },
  bankImage: {
    width: 47,
    height: 47,
    zIndex: 1,
  },
  bankDescription: {
    marginLeft: 19,
  },
  bankTitle: {
    color: "#555555",
    fontSize: 17,
    lineHeight: 16,
    fontWeight: "600",
  },
  dotsContent: {
    alignSelf: "flex-start",
    marginLeft: "auto",
    paddingRight: 10,
  },
  dots: {
    width: 4,
    height: 20,
  },
});

export default BankCard;
