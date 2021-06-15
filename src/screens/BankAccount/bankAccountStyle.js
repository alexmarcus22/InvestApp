import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";
import Fonts from "../../theme/fonts";

export const styles = StyleSheet.create({
  outerContainer: {
    height: "100%",
    backgroundColor: Colors.backgroundColor,
  },
  innerContainer: {
    paddingHorizontal: 30,
    paddingVertical: 63,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 50,
    alignItems: "center",
  },
  backImage: {
    width: 6,
    height: 12,
  },
  headerTitle: {
    fontFamily: Fonts.SFDisplay,
    fontWeight: "400",
    fontSize: 22,
    alignItems: "center",
    textAlign: "center",
    paddingRight: 6,
  },
  close: {
    position: "relative",
    zIndex: 10,
    width: 6,
    height: 12,
  },
});
