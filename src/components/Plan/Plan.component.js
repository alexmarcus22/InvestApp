import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { styles } from "./Plan.style";

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

export default PlanComponent;
