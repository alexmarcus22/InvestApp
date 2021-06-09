import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginHorizontal: 34,
    flexDirection: "column",
  },
  headerContainer: {
    flex: 1,
    marginBottom: 86,
  },
  backImage: {
    width: 6,
    height: 12,
    zIndex: 1,
  },
  inputsContainer: {
    flex: 3,
    width: "100%",
  },
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
  title: {
    textAlign: "center",
    fontSize: 34,
    lineHeight: 44,
    fontWeight: "700",
    fontFamily: "SFMedium",
  },
  description: {
    textAlign: "center",
    fontSize: 17,
    lineHeight: 22,
    fontFamily: "SFLight",
  },
  bottomText: {
    color: Colors.darkGreen,
    fontSize: 17,
    textAlign: "center",
    marginTop: 44,
    fontFamily: "SFLight",
  },
  goBack: {
    marginBottom: 10,
    width: 20,
    height: 20,
  },
});
