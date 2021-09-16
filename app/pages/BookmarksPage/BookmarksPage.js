//React - Expo dependencies
import React from "react";
import { Text, View } from "react-native";
import { AppColors } from "../../config/AppColors";

export default function BookmarksPage({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: AppColors.secondary,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is the Bookmarks Page</Text>
    </View>
  );
} //closes BookmarksPage JSX
