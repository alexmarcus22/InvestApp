import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

export const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.Black,
  },
  title: {
    fontSize: 18,
    lineHeight: 28,
    color: Colors.Text,
    letterSpacing: 0.8,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.Text,
    letterSpacing: 0.8,
  },
});
