import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.5)",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    paddingBottom: 23,
  },
  title: {
    fontSize: 17,
    lineHeight: 20,
    color: "#474747",
    paddingBottom: 20,
    paddingTop: 8,
    paddingRight: 30,
    maxWidth: "65%",
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    maxWidth: 260,
    color: "#474747",
    letterSpacing: 0.8,
  },
  imageContainer: {
    paddingRight: 13,
  },
  image: {
    width: 70,
    height: 70,
  },
  dataTime: {
    position: "absolute",
    right: 0,
    top: 0,
    color: "black",
    opacity: 0.6,
  },
});