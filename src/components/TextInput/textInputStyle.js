import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

export const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.InputBorder,
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 25,
    fontSize: 17,
    paddingRight: 25,
    fontFamily: "SFLight",
    maxWidth: "100%",
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 18,
  },
});
