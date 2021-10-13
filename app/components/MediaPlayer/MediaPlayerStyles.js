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

  video: {
    flex: 1,

    borderRadius: 20,
    backgroundColor: AppColors.modalBackground,
  },
  information: {
    justifyContent: "space-between",

    flexDirection: "row",
    marginTop: 20,
  },

  title: {
    height: 55,
    width: "65%",
    fontSize: FontsSizes.subtitle,
    fontFamily: Fonts.Comfortaa.Bold,
    color: AppColors.white,
  },

  controls: {
    paddingTop: 20,
    flex: 3,
    marginBottom: 15,
  },
  contentProgress: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progressCounter: {
    fontFamily: Fonts.Poppins.Regular,
    fontSize: FontsSizes.subtitle,
    color: AppColors.white,
  },
  progressControls: {
    flexDirection: "row",
    alignSelf: "center",
    flex: 1,
    width: "65%",
    alignItems: "center",
    justifyContent: "space-around",
  },

  playTrackBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  playTrackIcon: { resizeMode: "contain", width: "100%" },

  skipBtns: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 40,
    width: 40,
    height: 40,
  },
  switchTrackIcon: { width: "100%", resizeMode: "contain" },
});
