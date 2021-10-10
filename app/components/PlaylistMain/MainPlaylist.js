import { useNavigation } from "@react-navigation/core";
import React, { useContext, useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";
import { AppColors } from "../../config/AppColors";
import { MediaContext } from "../../utils/Contexts/MediaContext";
import { MainPlaylistStyles } from "./MainPlaylistStyles";

const iconPath = "../../assets/images/icons/";
const iconLibrary = {
  video: require(iconPath + "videoType.png"),
  audio: require(iconPath + "audioType.png"),
};

export default function MainPlaylist() {
  const navigation = useNavigation();
  const { content, playlistArray } = useContext(MediaContext);

  const cardSelected = (item) => {
    content.setter(item);

    navigation.navigate("Reproductor");
  };

  const renderItem = ({ item }) =>
    item.link ? (
      <TouchableHighlight
        style={MainPlaylistStyles.cardContainer}
        underlayColor={AppColors.secondary}
        onPress={() => cardSelected(item)}
      >
        <View style={MainPlaylistStyles.card}>
          <Image
            source={
              item.thumbnail
                ? { uri: item.thumbnail }
                : require("../../assets/images/icons/navbar/undefined.png")
            }
            style={MainPlaylistStyles.cardThumbnail}
          />
          <View style={MainPlaylistStyles.info}>
            <Text style={MainPlaylistStyles.title}>
              {item.title ? item.title : "Sin titulo"}
            </Text>
            <Text style={MainPlaylistStyles.duration}>
              {item.duration ? item.duration : "0:00"}
            </Text>
          </View>
          <Image
            style={MainPlaylistStyles.fileTypeIcon}
            source={
              item.link
                ? getFileIcon(item.link)
                : require("../../assets/images/icons/navbar/undefined.png")
            }
          />
        </View>
      </TouchableHighlight>
    ) : (
      <View></View>
    );

  return (
    <FlatList
      style={{ flex: 1 }}
      contentContainerStyle={MainPlaylistStyles.container}
      keyExtractor={(item) => item.id}
      data={playlistArray.value}
      renderItem={renderItem}
      ListFooterComponent={<View></View>}
      ListFooterComponentStyle={MainPlaylistStyles.flatListFooter}
    />
  );
}
const getFileIcon = (fileLink) => {
  return fileLink.includes(".mp3") ? iconLibrary.audio : iconLibrary.video;
};
