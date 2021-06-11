import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";
import Fonts from "../../theme/fonts";

export const styles = StyleSheet.create({
  bankContainer: {
    backgroundColor: Colors.Transparent,
    marginBottom: 30,
    borderRadius: 20,
  },
  bankCard: {
    flexDirection: "row",
    paddingHorizontal: 18,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 32,
    margin: 6,
    backgroundColor: Colors.White,
    borderRadius: 20,
    shadowOffset: { width: 0, height: 6 },
    shadowColor: Colors.Black,
    shadowOpacity: 0.14,
    shadowRadius: 5,
    elevation: 7,
  },
  bankImage: {
    flex: 2,
  },
  bankDescription: {
    marginLeft: 19,
    flex: 10,
  },
  bankTitle: {
    color: Colors.darkGray,
    fontSize: 17,
    lineHeight: 16,
    fontFamily: Fonts.SFDisplay,
    fontWeight: "600",
  },
  dotsContent: {
    flex: 1,
    marginLeft: 10,
  },
  dots: {
    width: 4,
    height: 20,
  },
});
