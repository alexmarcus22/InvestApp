import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";
import Fonts from "../../theme/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 34,
  },
  logo: {
    width: 300,
    height: 273,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 11,
    fontFamily: Fonts.SFDisplay,
    lineHeight: 44,
    paddingHorizontal: 15,
  },
  description: {
    marginBottom: 11,
    textAlign: "center",
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
    fontFamily: Fonts.SFDisplay,
    fontWeight: "300",
    marginBottom: 100,
  },
  noBackgroundText: {
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
    color: Colors.darkGreen,
    fontFamily: Fonts.SFDisplay,
  },
});
