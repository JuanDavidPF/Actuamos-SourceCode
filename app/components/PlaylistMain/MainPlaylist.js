import React from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { MainPlaylistStyles } from "./MainPlaylistStyles";

export default function MainPlaylist({ playlist }) {
  return (
    <FlatList
      style={{ flex: 1 }}
      contentContainerStyle={MainPlaylistStyles.container}
      data={playlist}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ListFooterComponent={<View></View>}
      ListFooterComponentStyle={MainPlaylistStyles.flatListFooter}
    />
  );
}

const renderItem = ({ item }) => (
  <View style={MainPlaylistStyles.playlistCard}>
    <Text>{item.title}</Text>
  </View>
);
