import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginBottom: 36,
  },
  input: {
    paddingBottom: 10,
    borderTopWidth: 0,
    borderBottomWidth: 1,
    lineHeight: 25,
    fontFamily: "SFMedium",
    opacity: 1,
    color: Colors.Black,
    placeholderTextColor: Colors.Black,
    fontWeight: "400",
  },
  label: {
    color: Colors.Black,
  },
});
