import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Image } from "react-native";
import styles from "./goBackButtonStyle";
import images from "../../theme/images";

const GoBackButton = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={goBack} style={styles.goBack}>
      <Image source={images.back} style={styles.backImage} />
    </TouchableOpacity>
  );
};

export default GoBackButton;
