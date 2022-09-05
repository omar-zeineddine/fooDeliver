import { StyleSheet } from "react-native";

export default StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    margin: 10,
  },
  iconContainer: {
    position: "absolute",
    top: 50,
    left: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
  },
  subtitle: {
    color: "grey",
    fontSize: 15,
    fontWeight: "500",
  },
  menuTitle: {
    marginTop: 20,
    fontSize: 18,
    letterSpacing: 0.6,
    fontWeight: "600",
  },
});
