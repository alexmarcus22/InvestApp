import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

export const styles = StyleSheet.create({
  button: {
    borderColor: Colors.Red,
    textAlign: "center",
    backgroundColor: Colors.darkGreen,
    borderRadius: 20,
    width: "100%",
    alignSelf: "stretch",
    color: Colors.White,
    paddingTop: 14,
    paddingBottom: 14,
    lineHeight: 20,
    overflow: "hidden",
  },
});
