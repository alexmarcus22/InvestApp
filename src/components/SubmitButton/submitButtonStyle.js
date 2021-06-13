import { StyleSheet } from "react-native";
import Fonts from "../../theme/fonts";
import Colors from "../../theme/colors";

export const styles = StyleSheet.create({
  submitButton: {
    textAlign: "center",
    borderWidth: 0,
    backgroundColor: Colors.darkGreen,
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom: 20,
    width: "100%",
    fontSize: 17,
    overflow: "hidden",
  },
  textButton: {
    color: Colors.White,
    fontFamily: Fonts.SFDisplay,
  },
});
