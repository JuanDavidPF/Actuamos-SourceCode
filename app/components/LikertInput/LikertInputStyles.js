import { StyleSheet } from "react-native";
import { AppColors } from "../../config/AppColors";
import { Fonts, FontsSizes } from "../../config/AppFonts";

export const LikertInputStyles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: AppColors.white,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  title: {
    textAlign: "center",
    color: AppColors.black,
    fontFamily: Fonts.Lato.Regular,
    fontSize: FontsSizes.paragraph,
  },
});
