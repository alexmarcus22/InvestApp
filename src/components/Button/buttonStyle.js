import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";
import Fonts from "../../theme/fonts";

export const styles = StyleSheet.create({
  button: {
    textAlign: "center",
    backgroundColor: Colors.darkGreen,
    borderRadius: 20,
    alignSelf: "stretch",
    paddingTop: 14,
    paddingBottom: 14,
    lineHeight: 20,
    overflow: "hidden",
  },
  text: {
    color: Colors.White,
    fontFamily: Fonts.SFDisplay,
  },
});
