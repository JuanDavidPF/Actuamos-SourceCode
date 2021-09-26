import { StyleSheet } from "react-native";
import { AppColors } from "../../config/AppColors";

export const MainPlaylistStyles = StyleSheet.create({
  container: { paddingHorizontal: 23, paddingVertical: 13 },
  flatListFooter: { marginBottom: 100 },

  playlistCard: {
    borderRadius: 10,
    marginVertical: 8,

    height: 90,
    backgroundColor: AppColors.darkSecondary,
  },
});
