//React - Expo dependencies
import { StyleSheet } from "react-native";
import { AppColors } from "../../config/AppColors";

export const HubPageStyles = StyleSheet.create({
  container: {
    position: "absolute",
    paddingHorizontal: 0,
    paddingBottom: 0,
    marginHorizontal: "10%",
    borderRadius: 35,
    height: 70,
    width: "80%",
    marginBottom: 27,
    backgroundColor: AppColors.violet,
    borderTopWidth: 0,
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
  },
}); //closes HubPageStyles method
