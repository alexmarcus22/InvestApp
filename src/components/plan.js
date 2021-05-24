import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from "react-native";

var path = "../../assets/homepage/";

const Item = ({ item, length }) => {
  path += item.bg;
  return (
    <TouchableOpacity>
      <ImageBackground
        source={require("../../assets/homepage/" + item.bg)}
        style={[
          styles.item,
          item.id == length ? { marginRight: 0 } : { marginRight: 20 },
        ]}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const PlanComponent = ({ item, length }) => {
  return <Item item={item} length={length} />;
};

const styles = StyleSheet.create({
  item: {
    borderRadius: 20,
    paddingBottom: 100,
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  title: {
    fontSize: 17,
    lineHeight: 24,
    color: "white",
  },
  subtitle: {
    fontSize: 13,
    lineHeight: 24,
    opacity: 1,
  },
});

export default PlanComponent;
