//React - Expo dependencies
import React from "react";
import { Text, View } from "react-native";

import { BookmarkPageStyles } from "./BookmarkPageStyles";

export default function BookmarksPage({ navigation }) {
  return (
    <View style={BookmarkPageStyles.container}>
      <Text>This is the Bookmarks Page</Text>
    </View>
  );
} //closes BookmarksPage JSX
