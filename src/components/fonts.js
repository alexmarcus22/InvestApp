import { useState } from "react";
import * as Font from "expo-font";

const FontsLoading = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const fetchFonts = () => {
    return Font.loadAsync({
      SFLight: require("../../assets/fonts/SF-Pro-Display-Light.otf"),
      SFRegular: require("../../assets/fonts/SF-Pro-Display-Regular.otf"),
      SFMedium: require("../../assets/fonts/SF-Pro-Display-Medium.otf"),
      SFBlack: require("../../assets/fonts/SF-Pro-Display-Black.otf"),
    });
  };

  return { dataLoaded, fetchFonts, setDataLoaded };
};

export default FontsLoading;
