import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";
import Fonts from "../../theme/fonts";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 26,
    paddingHorizontal: 30,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    alignItems: "center",
  },
  row1: {
    flex: 11,
    alignItems: "center",
  },
  row2: {
    flex: 1,
  },
  close: {
    position: "relative",
    zIndex: 1,
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontFamily: Fonts.SFDisplay,
    fontWeight: "400",
    fontSize: 22,
  },
  headerContent: {
    marginBottom: 30,
  },
  titleContent: {
    fontSize: 16,
    fontFamily: Fonts.SFDisplay,
    fontWeight: "300",
    color: Colors.Gray,
    marginBottom: 8,
  },
  valueContainer: { flexDirection: "row", alignItems: "center" },
  valueContent: {
    fontSize: 32,
    fontFamily: Fonts.SFDisplay,
    fontWeight: "600",
  },
  vote: {
    position: "relative",
    zIndex: 1,
    width: 16,
    height: 16,
    marginLeft: 40,
  },
  valuePercent: {
    fontSize: 11,
    color: Colors.Green,
  },
  currentPlans: {
    marginTop: 13,
    marginBottom: 30,
  },
  titlePlans: {
    fontSize: 22,
    lineHeight: 28,
    marginBottom: 20,
    fontWeight: "bold",
    fontFamily: Fonts.SFDisplay,
  },
  imageContainer: {
    width: "100%",
  },
  imagePlans: {
    borderRadius: 20,
    paddingBottom: 115,
    marginBottom: 10,
    paddingTop: 43,
    paddingRight: 28,
    paddingLeft: 28,
  },
  imagePlansTitle: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.8,
    fontFamily: Fonts.SFDisplay,
    fontWeight: "700",
  },
  imagePlansSubTitle: {
    fontSize: 13,
    lineHeight: 24,
    letterSpacing: 0.8,
  },
  allPlans: {
    letterSpacing: 0.8,
    lineHeight: 28,
    fontWeight: "600",
    fontSize: 18,
    color: Colors.Red,
    textAlign: "center",
  },
  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.Gray,
  },
  historyTitle: {
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0.8,
    marginBottom: 20,
  },
  historyItemTitle: {
    fontFamily: Fonts.SFDisplay,
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 28,
  },
  historyItemDate: { color: Colors.Gray },
  historyItemSubTitle: { color: Colors.Gray },
});
