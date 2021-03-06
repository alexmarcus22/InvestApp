import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";
import Fonts from "../../theme/fonts";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Transparent,
    marginBottom: 20,
  },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 22,
    backgroundColor: Colors.White,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    shadowOffset: { width: 5, height: 10 },
    shadowColor: Colors.Black,
    shadowOpacity: 0.04,
  },
  title: {
    fontSize: 17,
    color: Colors.Black,
    lineHeight: 16,
    marginLeft: 36,
    fontFamily: Fonts.SFDisplay,
    fontWeight: "bold",
  },
  imageCard: {
    width: 24,
    height: 24,
    zIndex: 1,
  },
});
