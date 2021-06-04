import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  outerContainer: {
    height: "100%",
    backgroundColor: "#F6F6F9",
  },
  innerContainer: {
    paddingHorizontal: 30,
    paddingVertical: 63,
    flex: 1,
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
    fontFamily: "SFMedium",
    fontWeight: "400",
    fontSize: 22,
    flex: 11,
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

export default styles;
