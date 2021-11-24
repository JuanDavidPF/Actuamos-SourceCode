//React - Expo dependencies
import React, { useContext } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MainPlaylist from "../../components/PlaylistMain/MainPlaylist";

import { UserContext } from "../../utils/Contexts/UserContext";

import { BookmarkPageStyles } from "./BookmarkPageStyles";

export default function BookmarksPage({ navigation }) {
  const { userState } = useContext(UserContext);
  return (
    <SafeAreaView style={BookmarkPageStyles.container}>
      <View style={BookmarkPageStyles.header}>
        <Image
          style={BookmarkPageStyles.headerIcon}
          source={require("../../assets/images/icons/navbar/bookmark.png")}
        />
        <Text style={BookmarkPageStyles.headerTitle}>Favoritos</Text>
      </View>
      <View style={{ flex: 1, padding: 15 }}>
        <MainPlaylist
          contentArray={userState.value.userData.bookmarks}
          isFetching={false}
        />
      </View>
    </SafeAreaView>
  );
} //closes BookmarksPage JSX
