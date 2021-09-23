import { StyleSheet } from "react-native";
import { AppColors } from "../../config/AppColors";
import { Fonts, FontsSizes } from "../../config/AppFonts";

export const PlaylistCardStyles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.modalBackground,
    width: "100%",
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 20,
  },
  cardImage: {
    marginVertical: 20,
    width: "80%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  cardTitle: {
    width: 240,
    color: AppColors.white,
    textAlign: "center",
    fontSize: FontsSizes.subtitle,
    fontFamily: Fonts.Comfortaa.Bold,
  },
});
