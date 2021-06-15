import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";
import Fonts from "../../theme/fonts";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginBottom: 36,
  },
  input: {
    paddingBottom: 10,
    lineHeight: 25,
    fontFamily: Fonts.SFDisplay,
    opacity: 1,
    color: Colors.Black,
    fontWeight: "400",
    maxWidth: "100%",
    shadowOffset: { width: 0, height: 0 },
    shadowColor: Colors.Transparent,
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  inputContainer: {
    borderTopWidth: 0,
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  label: {
    color: Colors.Black,
  },
  changeText: {
    color: Colors.darkGreen,
  },
  changeTextContainer: {
    right: 50,
  },
});
