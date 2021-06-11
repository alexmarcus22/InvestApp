import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

export const styles = StyleSheet.create({
  item: {
    borderRadius: 20,
    paddingBottom: 65,
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  title: {
    fontSize: 17,
    lineHeight: 24,
    color: Colors.White,
  },
  subtitle: {
    fontSize: 13,
    lineHeight: 24,
    opacity: 1,
  },
});
