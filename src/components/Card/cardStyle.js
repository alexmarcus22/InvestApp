import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 6,
    paddingBottom: 22,
    borderRadius: 20,
  },
  title: {
    fontSize: 14,
    color: Colors.White,
    marginBottom: 11,
    lineHeight: 20,
  },
  number: {
    fontSize: 32,
    color: Colors.White,
    lineHeight: 37,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.backgroundColor,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    position: "absolute",
    borderRadius: 20,
    right: 10,
    bottom: 22,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
  },
});
