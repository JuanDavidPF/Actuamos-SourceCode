import { StyleSheet } from "react-native";
import { AppColors } from "../../config/AppColors";
import { Fonts, FontsSizes } from "../../config/AppFonts";

export const MainPlaylistStyles = StyleSheet.create({
  flatListFooter: { marginBottom: 100 },
  cardContainer: {
    borderRadius: 10,
    marginVertical: 5,
  },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    height: 95,
    borderRadius: 10,
    backgroundColor: AppColors.darkSecondary,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  cardThumbnail: {
    resizeMode: "cover",
    borderRadius: 8,
    width: 64,
    height: 64,
  },

  info: {
    width: "60%",
  },
  title: {
    fontFamily: Fonts.Lato.Bold,
    fontSize: FontsSizes.paragraph,
    color: AppColors.white,
  },
  duration: {
    marginTop: 5,
    color: AppColors.white,
    fontFamily: Fonts.Lato.Regular,
    fontSize: FontsSizes.paragraph,
  },
  fileTypeIcon: {
    width: 35,
    height: 35,
  },
});
