import { useNavigation } from "@react-navigation/core";
import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";
import { AppColors } from "../../config/AppColors";
import { MediaContext } from "../../utils/Contexts/MediaContext";
import { UserContext } from "../../utils/Contexts/UserContext";
import { MainPlaylistStyles } from "./MainPlaylistStyles";

const iconPath = "../../assets/images/icons/";
const iconLibrary = {
  video: require(iconPath + "videoType.png"),
  audio: require(iconPath + "audioType.png"),
};

export default function MainPlaylist({ contentArray }) {
  const navigation = useNavigation();

  const cardSelected = (item) => {
    navigation.navigate("Reproductor", {
      index: contentArray.indexOf(item),
      playlistArray: contentArray,
    });
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

  return contentArray && contentArray.length > 0 ? (
    <FlatList
      style={{ flex: 1 }}
      keyExtractor={(item) => item.id}
      data={contentArray}
      renderItem={renderItem}
      ListFooterComponent={<View></View>}
      ListFooterComponentStyle={MainPlaylistStyles.flatListFooter}
    />
  ) : (
    <ActivityIndicator
      style={{ marginTop: 100 }}
      size={"large"}
      color={AppColors.accent}
    />
  );
}
const getFileIcon = (fileLink) => {
  return fileLink.includes(".mp3") ? iconLibrary.audio : iconLibrary.video;
};
