import { Platform, StatusBar, StyleSheet } from "react-native";
import { AppColors } from "../../config/AppColors";
import { Fonts, FontsSizes } from "../../config/AppFonts";

export const BookmarkPageStyles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    backgroundColor: AppColors.primary,
    flex: 1,
    justifyContent: "center",
  },

  header: {
    marginVertical: 20,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },

  headerIcon: {
    height: 45,
    width: 45,
    marginHorizontal: 20,
    resizeMode: "contain",
  },
  headerTitle: {
    color: AppColors.white,
    fontFamily: Fonts.Lato.Bold,
    fontSize: FontsSizes.title,
  },
});
