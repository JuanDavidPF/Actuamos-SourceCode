import { StyleSheet, StatusBar } from "react-native";
import { AppColors } from "../../config/AppColors";
import { Fonts, FontsSizes } from "../../config/AppFonts";

export const MediaPlayerStyles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary,
    paddingHorizontal: 30,

    paddingBottom: 100,
    flex: 1,
  },

  informationSection: { flex: 5, marginTop: 20 },
  cover: {
    flex: 1,
    borderRadius: 20,
  },
  information: {
    marginTop: 20,
    marginBottom: 40,
  },

  title: {
    fontSize: FontsSizes.subtitle,
    fontFamily: Fonts.Comfortaa.Bold,
    color: AppColors.white,
  },

  controls: {
    flex: 3,

    marginBottom: 15,
  },
});
