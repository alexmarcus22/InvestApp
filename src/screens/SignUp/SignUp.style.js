import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    alignItems: "stretch",
    paddingLeft: 34,
    paddingRight: 34,
  },
  logo: {
    width: 300,
    height: 273,
    alignSelf: "center",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 11,
    fontFamily: "SFMedium",
    lineHeight: 44,
    paddingHorizontal: 15,
  },
  description: {
    marginBottom: 11,
    textAlign: "center",
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
    fontFamily: "SFLight",
    fontWeight: "400",
    marginBottom: 100,
  },
  noBackgroundText: {
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
    color: "#31A062",
  },
});
