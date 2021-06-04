import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bankContainer: {
    backgroundColor: "white",
    marginBottom: 30,
    borderRadius: 20,
  },
  bankCard: {
    paddingHorizontal: 18,
    paddingVertical: 32,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    shadowOffset: { width: 0, height: 7 },
    shadowColor: "black",
    shadowOpacity: 0.04,
  },
  bankImage: {
    width: 47,
    height: 47,
    zIndex: 1,
  },
  bankDescription: {
    marginLeft: 19,
  },
  bankTitle: {
    color: "#555555",
    fontSize: 17,
    lineHeight: 16,
    fontWeight: "600",
    maxWidth: "99%",
  },
  dotsContent: {
    alignSelf: "flex-start",
    marginLeft: "auto",
    paddingRight: 10,
  },
  dots: {
    width: 4,
    height: 20,
  },
});
