//React - Expo dependencies
import { StyleSheet } from "react-native";
import { AppColors } from "../../config/AppColors";

export const BottomNavigationBarStyles = StyleSheet.create({
  container: {
    position: "absolute",
    marginHorizontal: "10%",
    borderRadius: 35,
    height: 70,
    width: "80%",
    marginBottom: 40,
    backgroundColor: AppColors.violet,
    borderTopWidth: 0,
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
  },
}); //closes BottomNavigationBarStyles method
