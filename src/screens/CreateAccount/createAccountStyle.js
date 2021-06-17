import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";
import Fonts from "../../theme/fonts";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 63,
    paddingHorizontal: 30,
  },
  headerContainer: {
    marginBottom: 86,
  },
  inputsContainer: {
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.InputBorder,
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 25,
    fontSize: 17,
    paddingRight: 25,
    fontFamily: Fonts.SFDisplay,
    maxWidth: "100%",
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 18,
  },
  title: {
    textAlign: "center",
    fontSize: 34,
    lineHeight: 44,
    fontWeight: "700",
    fontFamily: Fonts.SFDisplay,
  },
  description: {
    textAlign: "center",
    fontSize: 17,
    lineHeight: 22,
    fontFamily: Fonts.SFDisplay,
  },
  bottomText: {
    color: Colors.darkGreen,
    fontSize: 17,
    textAlign: "center",
    marginTop: 44,
    fontFamily: Fonts.SFDisplay,
  },
});
