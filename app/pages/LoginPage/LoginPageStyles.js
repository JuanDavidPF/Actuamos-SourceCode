import { StyleSheet } from "react-native";
import { AppColors } from "../../config/AppColors";
import { Fonts, FontsSizes } from "../../config/AppFonts";

export const LoginPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primary,
    alignItems: "center",
    justifyContent: "space-around",
  },
  header: {
    top: 100,

    alignItems: "center",
  },

  logo: { width: 100, height: 100 },
  title: {
    fontFamily: Fonts.Lato.Bold,
    fontSize: FontsSizes.title,
    color: AppColors.white,
  },
});
