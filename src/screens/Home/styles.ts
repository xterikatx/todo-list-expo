import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundLogo: {
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    paddingVertical: 20,
  },
  container: {
    alignItems: "center",
    backgroundColor: "#191919",
    flex: 1,
  },
  input: {
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "#ffffff",
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 7,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#F2F2F2",
    fontSize: 24,
  },

  form: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 30,
    marginTop: -30,
    marginBottom: 10,
  },
  countContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  textNotCompleted: {
    color: "#4EA8DE",
  },
  textCompleted: {
    color: "#8284FA",
  },
});
