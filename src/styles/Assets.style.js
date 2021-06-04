import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 26,
    paddingHorizontal: 30,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  close: {
    position: "relative",
    zIndex: 1,
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontFamily: "SFMedium",
    fontWeight: "400",
    fontSize: 22,
  },
  headerContent: {
    marginBottom: 30,
  },
  titleContent: {
    fontSize: 16,
    fontFamily: "SFMedium",
    fontWeight: "300",
    color: "#B2B2B2",
    marginBottom: 8,
  },
  valueContent: {
    fontSize: 32,
    fontFamily: "SFMedium",
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
    color: "#00B907",
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
    fontFamily: "SFMedium",
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
    fontFamily: "SFMedium",
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
    color: "#FE555D",
    textAlign: "center",
  },
  historyTitle: {
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0.8,
    marginBottom: 20,
  },
  historyItemTitle: {
    fontFamily: "SFMedium",
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 28,
  },
});

export default styles;
