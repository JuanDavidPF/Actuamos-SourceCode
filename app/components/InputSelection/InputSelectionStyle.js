import { StyleSheet } from "react-native";
import { Fonts, FontsSizes } from "../../config/AppFonts";

export const InputSelectionStyle = StyleSheet.create({
  container: {
    borderRadius: 20,
    flex: 1,
    marginVertical: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  inputIcon: {
    marginHorizontal: 10,
    resizeMode: "contain",
    width: 30,
    height: 30,
  },
  inputLabel: {
    flex: 1,

    fontFamily: Fonts.Lato.Light,
    fontSize: FontsSizes.subtitle,
  },
});
