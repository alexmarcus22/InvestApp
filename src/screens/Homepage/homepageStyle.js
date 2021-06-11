import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";
import Fonts from "../../theme/fonts";

export const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    width: "100%",
  },
  container: {
    flexDirection: "column",
    paddingHorizontal: 30,
    paddingVertical: 60,
  },
  headerContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 10,
  },
  investContainer: {
    flexDirection: "column",
  },
  investTitle: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "400",
    fontFamily: Fonts.SFDisplay,
  },
  row1: { flexDirection: "row" },
  hamburger: {
    position: "relative",
    zIndex: 1,
    width: 24,
    height: 24,
  },
  column1: {
    flexDirection: "column",
  },
  notification: {
    position: "relative",
    zIndex: 1,
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 34,
    lineHeight: 44,
    fontWeight: "400",
    marginBottom: 30,
    fontFamily: Fonts.SFDisplay,
  },
  mainContainer: {
    flex: 8,
    paddingTop: 2,
  },
  plans: {
    marginTop: 20,
    marginBottom: 45,
  },
  plansTitle: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: Fonts.SFDisplay,
  },
  plansSeeAll: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "700",
    color: Colors.Red,
    letterSpacing: 0.8,
  },
});
