import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bankContainer: {
    backgroundColor: "transparent",
    marginBottom: 30,
    borderRadius: 20,
  },
  bankCard: {
    flexDirection: "row",
    paddingHorizontal: 18,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 32,
    margin: 6,
    backgroundColor: "white",
    borderRadius: 20,
    shadowOffset: { width: 0, height: 6 },
    shadowColor: "black",
    shadowOpacity: 0.14,
    shadowRadius: 5,
    elevation: 7,
  },
  bankImage: {
    flex: 2,
  },
  bankDescription: {
    marginLeft: 19,
    flex: 10,
  },
  bankTitle: {
    color: "#555555",
    fontSize: 17,
    lineHeight: 16,
    fontFamily: "SFRegular",
    fontWeight: "600",
  },
  dotsContent: {
    flex: 1,
    marginLeft: 10,
  },
  dots: {
    width: 4,
    height: 20,
  },
});
