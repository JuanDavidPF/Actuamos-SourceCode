import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Text,
  View,
} from "react-native";
import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import MainPlaylist from "../../components/PlaylistMain/MainPlaylist";
import { AppColors } from "../../config/AppColors";
import { PlaylistPageStyles } from "./PlaylistPageStyles";
export default function PlayListPage({ navigation, route }) {
  [content, setContent] = useState([
    { id: "1", title: "Elemento 1", thumbnail: "asdasd", link: "asdsd" },
    { id: "2", title: "Elemento 2", thumbnail: "asdasd", link: "asdsd" },
    { id: "3", title: "Elemento 3", thumbnail: "asdasd", link: "asdsd" },
    { id: "4", title: "Elemento 3", thumbnail: "asdasd", link: "asdsd" },
    { id: "5", title: "Elemento 3", thumbnail: "asdasd", link: "asdsd" },
    { id: "6", title: "Elemento 6", thumbnail: "asdasd", link: "asdsd" },
    { id: "8", title: "Elemento 6", thumbnail: "asdasd", link: "asdsd" },
    { id: "9", title: "Elemento 6", thumbnail: "asdasd", link: "asdsd" },
    { id: "7", title: "Elemento 6", thumbnail: "asdasd", link: "asdsd" },
  ]);
  useEffect(() => {}, []);
  return (
    <View style={PlaylistPageStyles.container}>
      <ImageBackground
        style={PlaylistPageStyles.playlistCover}
        source={{ uri: route.params.playlist.thumbnail }}
      >
        <TouchableHighlight
          activeOpacity={1}
          underlayColor={AppColors.accent}
          style={PlaylistPageStyles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={PlaylistPageStyles.backBtnIcon}
            source={require("../../assets/images/icons/backBtn.png")}
          />
        </TouchableHighlight>
      </ImageBackground>
      <Text style={PlaylistPageStyles.playlistTitle}>
        {route.params.playlist.title}
      </Text>

      <View style={{ flex: 1 }}>
        {content ? (
          <MainPlaylist playlist={content} />
        ) : (
          <ActivityIndicator size={"large"} color={AppColors.accent} />
        )}
      </View>
    </View>
  );
}
