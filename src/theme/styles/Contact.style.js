import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  outerContainer: { backgroundColor: "#F8F8F9", height: "100%" },
  innerContainer: {
    paddingHorizontal: 30,
    paddingVertical: 63,
    height: "100%",
    backgroundColor: "#F6F6F9",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 50,
    alignItems: "center",
  },
  row1: {
    flex: 1,
  },
  close: {
    position: "relative",
    zIndex: 10,
    width: 6,
    height: 12,
  },
  headerTitle: {
    fontFamily: "SFMedium",
    fontweight: "400",
    fontSize: 22,
    flex: 11,
    textAlign: "center",
    paddingRight: 20,
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

export default styles;
