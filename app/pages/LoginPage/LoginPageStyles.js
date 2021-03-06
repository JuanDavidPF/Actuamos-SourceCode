import { StyleSheet } from "react-native";
import { AppColors } from "../../config/AppColors";
import { Fonts, FontsSizes } from "../../config/AppFonts";

export const LoginPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primary,
    alignItems: "center",
  },
  header: {
    marginTop: 100,
    marginBottom: 30,
    alignItems: "center",
  },

  logo: { width: 100, height: 100, marginVertical: 30 },
  title: {
    fontFamily: Fonts.Lato.Bold,
    fontSize: FontsSizes.title,
    color: AppColors.white,
  },
});
