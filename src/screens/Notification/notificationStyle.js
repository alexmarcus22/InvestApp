import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

export const styles = StyleSheet.create({
  outerContainer: { 
    backgroundColor: Colors.backgroundColor, 
    height: "100%" },
  innerContainer: {
    paddingHorizontal: 30,
    paddingVertical: 63,
  },
  headerContainer: {
    paddingBottom: 29,
  },
  backImage: {
    width: 6,
    height: 12,
    marginBottom: 24,
  },
  headerText: {
    fontFamily: Fonts.SFDisplay
    fontSize: 34,
    lineHeight: 44,
  },
});
