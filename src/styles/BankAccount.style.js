import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
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
  backImage: {
    width: 6,
    height: 12,
  },
  headerTitle: {
    fontFamily: "SFMedium",
    fontWeight: "400",
    fontSize: 22,
  },
  close: {
    position: "relative",
    zIndex: 10,
    width: 6,
    height: 12,
  },
});

export default styles;
