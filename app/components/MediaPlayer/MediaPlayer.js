//react imports
import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";
import React, { useContext, useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

import { SafeAreaView } from "react-native-safe-area-context";
import { AppColors } from "../../config/AppColors";
import { MediaContext } from "../../utils/Contexts/MediaContext";
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
};

export default function MediaPlayer() {
  const { content, playlistArray } = useContext(MediaContext);

  const [contentProgress, setContentProgress] = useState(0);
  const [contentDuration, setContentDuration] = useState(0);

  //media

  const [Loaded, SetLoaded] = React.useState(false);
  const [Loading, SetLoading] = React.useState(false);
  const [Playing, SetPlaying] = React.useState(false);

  const FileType = GetFileType(content.value.link);
  const sound = React.useRef(new Audio.Sound());

  useEffect(() => {
    switch (FileType) {
      case "audio":
        LoadAudio();
        return () => UnloadAudio();

      case "video":
        break;
    }
  }, [content.value]);

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
          { uri: content.value.link },
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
    let index = playlistArray.value.indexOf(content.value);
    index + 1 < playlistArray.value.length ? (index += 1) : (index = 0);

    content.setter(playlistArray.value[index]);
  };

  const HandlePreviousTrackButton = () => {
    let index = playlistArray.value.indexOf(content.value);
    index - 1 >= 0 ? (index -= 1) : (index = playlistArray.value.length - 1);

    content.setter(playlistArray.value[index]);
  };

  return (
    <SafeAreaView style={MediaPlayerStyles.container}>
      <View style={MediaPlayerStyles.informationSection}>
        <Image
          style={MediaPlayerStyles.cover}
          source={{ uri: content.value.thumbnail }}
        />
        <View style={MediaPlayerStyles.information}>
          <Text style={MediaPlayerStyles.title}>{content.value.title}</Text>
        </View>
      </View>
      <View style={MediaPlayerStyles.controls}>
        <Slider
          onValueChange={(value) => {
            setContentProgress(value);
          }}
          onSlidingStart={(value) => {
            PauseAudio();
          }}
          onSlidingComplete={(value) => {
            sound.current.setPositionAsync(value * 1000);
            PlayAudio();
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
            underlayColor={AppColors.accent}
            style={MediaPlayerStyles.skipBtns}
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
            underlayColor={AppColors.accent}
            style={MediaPlayerStyles.skipBtns}
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
