import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

export const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.Black,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    paddingBottom: 23,
  },
  title: {
    fontSize: 17,
    lineHeight: 20,
    color: Colors.Text,
    paddingBottom: 20,
    paddingTop: 8,
    paddingRight: 30,
    maxWidth: "65%",
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    maxWidth: 260,
    color: Colors.Text,
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
    color: Colors.Black,
    opacity: 0.6,
  },
});
