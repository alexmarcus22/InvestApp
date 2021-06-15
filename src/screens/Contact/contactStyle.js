import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";
import Fonts from "../../theme/fonts";

export const styles = StyleSheet.create({
  outerContainer: { backgroundColor: Colors.backgroundColor, height: "100%" },
  innerContainer: {
    paddingHorizontal: 30,
    paddingTop: 63,
    paddingBottom: 0,
    height: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 50,
    alignItems: "center",
  },
  close: {
    position: "relative",
    zIndex: 10,
    width: 6,
    height: 12,
  },
  headerTitle: {
    fontFamily: Fonts.SFDisplay,
    fontWeight: "400",
    fontSize: 22,
    textAlign: "center",
  },
  profile: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    zIndex: 1,
  },
});
