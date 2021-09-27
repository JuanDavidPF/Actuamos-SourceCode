//React Imports

import React, { useEffect, useState } from "react";
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

export default function PlayListPage({ navigation, route }) {
  [content, setContent] = useState([]);

  useEffect(() => {
    try {
      const db = firebase.firestore();
      setContent([]);
      route.params.playlist.content.forEach((contentDocID) => {
        db.collection("Content")
          .doc(contentDocID)
          .get()
          .then((doc) => {
            let contentData = {
              id: doc.id,
              title: doc.data().title,
              thumbnail: doc.data().thumbnail,
              link: doc.data().link,
            };

            if (!content.includes(contentData)) {
              let contentClone = [];
              contentClone = JSON.parse(JSON.stringify(content));
              contentClone.push(contentData);
              setContent(contentClone);
            }
          });
      });
    } catch (err) {
      Alert.alert("There is something wrong!", err.message);
    }
  }, []);
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
        {content.length > 0 ? (
          <MainPlaylist playlist={content} />
        ) : (
          <ActivityIndicator size={"large"} color={AppColors.accent} />
        )}
      </View>
    </View>
  );
}
