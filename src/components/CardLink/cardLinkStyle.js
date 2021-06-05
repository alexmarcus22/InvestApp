import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    marginBottom: 20,
  },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 22,
    backgroundColor: "white",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    shadowOffset: { width: 5, height: 10 },
    shadowColor: "black",
    shadowOpacity: 0.04,
  },
  title: {
    fontSize: 17,
    color: "black",
    lineHeight: 16,
    color: "#333333",
    marginLeft: 36,
    fontFamily: "SFMedium",
    fontWeight: "bold",
  },
  imageCard: {
    width: 24,
    height: 24,
    zIndex: 1,
  },
});
