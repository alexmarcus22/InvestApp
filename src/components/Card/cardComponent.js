import React from "react";
import { Text, View, Pressable, TouchableHighlight } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./cardStyle";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../theme/colors";

const Card = ({ title, value, navigateTo }) => {
  const navigation = useNavigation();
  return (
    <View>
      <LinearGradient
        colors={[Colors.lightGreen, Colors.secondDarkGreen]}
        style={styles.container}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.number}>{value}</Text>
        <Pressable style={styles.button} title="Invest">
          <TouchableHighlight onPress={() => navigation.navigate(navigateTo)}>
            <Text>Invest</Text>
          </TouchableHighlight>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

export default Card;
