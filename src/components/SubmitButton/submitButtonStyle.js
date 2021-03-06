import { StyleSheet } from "react-native";
import Fonts from "../../theme/fonts";
import Colors from "../../theme/colors";

export const styles = StyleSheet.create({
  submitButton: {
    textAlign: "center",
    borderWidth: 0,
    backgroundColor: Colors.darkGreen,
    borderRadius: 20,
    color: Colors.White,
    paddingTop: 20,
    paddingBottom: 20,
    width: "100%",
    fontSize: 17,
    fontFamily: Fonts.SFDisplay,
    overflow: "hidden",
  },
});
