//react imports
import Slider from "@react-native-community/slider";
import { useRoute } from "@react-navigation/core";
import { Audio, Video } from "expo-av";
import React, { useContext, useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

//firebase imports
import firebase from "firebase";

//config
import { AppColors } from "../../config/AppColors";

//contexts
import { MediaContext } from "../../utils/Contexts/MediaContext";
import { UserContext } from "../../utils/Contexts/UserContext";

//methods
import { GetFileType } from "../../utils/GetFileType";
import { SecondsToHMS } from "../../utils/TimeConvertions";

//styles
import { MediaPlayerStyles } from "./MediaPlayerStyles";

//icons
const icons = {
  previousTrack: require("../../assets/images/icons/contentPlayer/previousTrack.png"),
  nextTrack: require("../../assets/images/icons/contentPlayer/nextTrack.png"),
  playButton: require("../../assets/images/icons/contentPlayer/playTrack.png"),
  pauseButton: require("../../assets/images/icons/contentPlayer/pauseTrack.png"),
  favouriteIcon: require("../../assets/images/icons/navbar/bookmarkFocused.png"),
  unFavouriteIcon: require("../../assets/images/icons/navbar/bookmark.png"),
};

export default function MediaPlayer({ route, navigation }) {
  const { index, playlistArray } = route.params;
  const { userState } = useContext(UserContext);

  const [content, setContent] = useState(playlistArray[index]);
  const [favourite, setFavourite] = useState();

  const [contentProgress, setContentProgress] = useState(0);
  const [contentDuration, setContentDuration] = useState(0);

  //media

  const [Loaded, SetLoaded] = React.useState(false);
  const [Loading, SetLoading] = React.useState(false);
  const [Playing, SetPlaying] = React.useState(false);

  const FileType = GetFileType(content.link);

  const sound = React.useRef(new Audio.Sound());

  const CheckIfBookmark = () => {
    setFavourite(
      userState.value.userData.bookmarks.find(
        (element) => element.id == content.id
      )
    );
  };

  useEffect(() => {
    CheckIfBookmark();
  }, [userState.value]);

  useEffect(() => {
    const db = firebase.firestore();
    let userDataClone = JSON.parse(JSON.stringify(userState.value.userData));
    let contentIDArray = [];
    userDataClone.bookmarks.forEach((content) => {
      contentIDArray.push(content.id);
    });
    userDataClone.bookmarks = contentIDArray;

    db.collection("Users")
      .doc(userState.value.authData.uid)
      .set(userDataClone, { merge: true });
  }, [favourite]);

  useEffect(() => {
    setContent(playlistArray[index]);
  }, [route.params]);

  useEffect(() => {
    CheckIfBookmark();
    switch (FileType) {
      case "audio":
        LoadAudio();
        return () => UnloadAudio();

      case "video":
        break;
    }
  }, [content]);

  const UnloadAudio = async () => {
    await sound.current.unloadAsync();
  };

  const PlaybackUpdate = (status) => {
    if (!status.isLoaded) return;
    SetPlaying(status.isPlaying);
    setContentProgress(status.positionMillis / 1000);
    if (status.didJustFinish) {
      sound.current.setPositionAsync(0);
      PauseAudio();
    }
  };

  const LoadAudio = async () => {
    if (Loading) return;
    setContentProgress(0);
    setContentDuration(0);
    sound.current.setOnPlaybackStatusUpdate((status) => {
      PlaybackUpdate(status);
    });

    SetLoaded(false);
    SetLoading(true);
    SetPlaying(false);

    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

    const checkLoading = await sound.current.getStatusAsync();
    if (checkLoading.isLoaded === false) {
      try {
        const result = await sound.current.loadAsync(
          { uri: content.link },
          { shouldPlay: true },
          true
        );
        if (result.isLoaded === false) {
          SetLoading(false);
          console.log("Error in Loading Audio");
        } else {
          SetLoading(false);
          SetLoaded(true);

          setContentDuration(result.durationMillis / 1000);
        }
      } catch (error) {
        console.log(error);
        SetLoading(false);
      }
    } else {
      SetLoading(false);
    }
  };

  const PlayAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (Playing === false) {
          sound.current.playAsync();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const PauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (Playing === true) {
          sound.current.pauseAsync();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const HandlePlayButtonClick = () => {
    if (Playing) PauseAudio();
    else PlayAudio();
  };

  const HandleNextTrackButton = () => {
    let index = playlistArray.indexOf(content);
    index + 1 < playlistArray.length ? (index += 1) : (index = 0);

    setContent(playlistArray[index]);
  };

  const HandlePreviousTrackButton = () => {
    let index = playlistArray.indexOf(content);
    index - 1 >= 0 ? (index -= 1) : (index = playlistArray.length - 1);

    setContent(playlistArray[index]);
  };

  const HandleBookmarkButton = () => {
    let userClone = JSON.parse(JSON.stringify(userState.value));
    let bookmarkIndex = userClone.userData.bookmarks.findIndex(
      (element) => element.id == content.id
    );

    if (favourite) {
      if (bookmarkIndex == -1) return;

      userClone.userData.bookmarks.splice(bookmarkIndex, 1);
      userState.setter(userClone);
    } else {
      if (bookmarkIndex > -1) return;
      userClone.userData.bookmarks.push(content);
      userState.setter(userClone);
    }
  };

  return (
    <SafeAreaView style={MediaPlayerStyles.container}>
      <View style={MediaPlayerStyles.informationSection}>
        <Image
          style={MediaPlayerStyles.cover}
          source={{ uri: content.thumbnail }}
        />
        <View style={MediaPlayerStyles.information}>
          <Text style={MediaPlayerStyles.title}>{content.title}</Text>
          <TouchableWithoutFeedback
            onPress={() => {
              HandleBookmarkButton();
            }}
          >
            <Image
              style={{ width: 35, height: 35, resizeMode: "contain" }}
              source={favourite ? icons.favouriteIcon : icons.unFavouriteIcon}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={MediaPlayerStyles.controls}>
        <Slider
          onValueChange={(value) => {
            setContentProgress(value);
          }}
          onTouchStart={() => {
            PauseAudio();
          }}
          onTouchEnd={() => {
            PlayAudio();
          }}
          onSlidingComplete={(value) => {
            sound.current.setPositionAsync(value * 1000);
          }}
          value={contentProgress}
          minimumValue={0}
          maximumValue={contentDuration}
          disabled={!Loaded}
          thumbTintColor={AppColors.accent}
          minimumTrackTintColor={AppColors.accent}
          maximumTrackTintColor={AppColors.white}
        />

        <View style={MediaPlayerStyles.contentProgress}>
          <Text style={MediaPlayerStyles.progressCounter}>
            {SecondsToHMS(contentProgress)}
          </Text>
          <Text style={MediaPlayerStyles.progressCounter}>
            {SecondsToHMS(contentDuration)}
          </Text>
        </View>

        <View style={MediaPlayerStyles.progressControls}>
          <TouchableHighlight
            disabled={!(playlistArray.length > 1)}
            underlayColor={AppColors.accent}
            style={[
              MediaPlayerStyles.skipBtns,
              { opacity: playlistArray.length > 1 ? 1 : 0.4 },
            ]}
            onPress={() => {
              HandlePreviousTrackButton();
            }}
          >
            <Image
              style={MediaPlayerStyles.switchTrackIcon}
              source={icons.previousTrack}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={MediaPlayerStyles.playTrackBtn}
            underlayColor={AppColors.accent}
            onPress={() => {
              HandlePlayButtonClick();
            }}
          >
            <Image
              style={MediaPlayerStyles.playTrackIcon}
              source={Playing ? icons.pauseButton : icons.playButton}
            />
          </TouchableHighlight>
          <TouchableHighlight
            disabled={playlistArray.length <= 1}
            underlayColor={AppColors.accent}
            style={[
              MediaPlayerStyles.skipBtns,
              { opacity: playlistArray.length > 1 ? 1 : 0.4 },
            ]}
            onPress={() => {
              HandleNextTrackButton();
            }}
          >
            <Image
              style={MediaPlayerStyles.switchTrackIcon}
              source={icons.nextTrack}
            />
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
}
