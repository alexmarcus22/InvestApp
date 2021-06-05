import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: 30,
    backgroundColor: "#F6F6F9",
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
    fontFamily: "SFMedium",
    fontSize: 34,
    lineHeight: 44,
  },
  profile: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  name: {
    fontFamily: "SFMedium",
    fontSize: 22,
  },
  job: {
    fontSize: 17,
  },
});
