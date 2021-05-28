import React, { useState } from "react";
import * as Font from "expo-font";

const FontsLoading = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const fetchFonts = () => {
    return Font.loadAsync({
      "SF-Light": require("../../assets/fonts/SF-Pro-Display-Light.otf"),
      "SF-Regular": require("../../assets/fonts/SF-Pro-Display-Regular.otf"),
      "SF-Black": require("../../assets/fonts/SF-Pro-Display-Black.otf"),
      "SF-Medium": require("../../assets/fonts/SF-Pro-Display-Medium.otf"),
    });
  };

  return { dataLoaded, fetchFonts, setDataLoaded };
};

export default FontsLoading;
