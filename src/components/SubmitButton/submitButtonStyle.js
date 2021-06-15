import { StyleSheet } from "react-native";
import Fonts from "../../theme/fonts";
import Colors from "../../theme/colors";

export const styles = StyleSheet.create({
  submitButton: {
    borderWidth: 0,
    backgroundColor: Colors.darkGreen,
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom: 20,
    lineHeight: 20,
    width: "100%",
    fontSize: 17,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  textButton: {
    color: Colors.White,
    fontFamily: Fonts.SFDisplay,
  },
});
