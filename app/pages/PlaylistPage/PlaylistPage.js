//React Imports

import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Text,
  View,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

//firebase imports
import firebase from "firebase";

//styles and config
import { AppColors } from "../../config/AppColors";
import { PlaylistPageStyles } from "./PlaylistPageStyles";

//components
import MainPlaylist from "../../components/PlaylistMain/MainPlaylist";
import { MediaContext } from "../../utils/Contexts/MediaContext";

export default function PlayListPage({ navigation }) {
  const { playlist, playlistArray } = useContext(MediaContext);

  return (
    <View style={PlaylistPageStyles.container}>
      <ImageBackground
        style={PlaylistPageStyles.playlistCover}
        source={{ uri: playlist.value.thumbnail }}
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
        {playlist.value.title}
      </Text>

      <View style={{ flex: 1, padding: 15 }}>
        <MainPlaylist contentArray={playlistArray.value} />
      </View>
    </View>
  );
}
