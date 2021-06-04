import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

const Item = ({ item, length }) => {
  return (
    <TouchableOpacity>
      <ImageBackground
        source={item.bg}
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
    paddingBottom: 65,
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
