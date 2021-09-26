import { Platform, StatusBar, StyleSheet } from "react-native";
import { AppColors } from "../../config/AppColors";
import { Fonts, FontsSizes } from "../../config/AppFonts";

export const PlaylistPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primary,
  },
  playlistCover: {
    width: "100%",
    height: 220,
    resizeMode: "center",
  },
  playlistTitle: {
    padding: 10,
    backgroundColor: AppColors.lightViolet,
    color: AppColors.white,

    fontFamily: Fonts.Comfortaa.Bold,
    fontSize: FontsSizes.subtitle,

    textAlign: "center",
    textAlignVertical: "center",
  },
  backBtn: {
    alignSelf: "flex-start",
    marginTop: StatusBar.currentHeight + 20,
    marginLeft: 20,
    backgroundColor: AppColors.violet,
    padding: 12,
    borderRadius: 100,
  },
  backBtnIcon: {
    width: 20,
    height: 20,
  },
});
