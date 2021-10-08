//react imports
import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

import { SafeAreaView } from "react-native-safe-area-context";
import { AppColors } from "../../config/AppColors";
import { SecondsToHMS } from "../../utils/TimeConvertions";

//styles
import { MediaPlayerStyles } from "./MediaPlayerStyles";

export default function MediaPlayer({ route }) {
  //icon
  const icons = {
    previousTrack: require("../../assets/images/icons/contentPlayer/previousTrack.png"),
    nextTrack: require("../../assets/images/icons/contentPlayer/nextTrack.png"),
    playButton: require("../../assets/images/icons/contentPlayer/playTrack.png"),
    pauseButton: require("../../assets/images/icons/contentPlayer/pauseTrack.png"),
  };

  const GetFileType = () => {
    if (content.link.includes(".mp3")) return "audio";
    else if (content.link.includes(".mp4")) return "video";
  };

  const content = route.params.content;
  const [contentProgress, setContentProgress] = useState(0);
  const [contentDuration, setContentDuration] = useState(0);

  //media

  const [Loaded, SetLoaded] = React.useState(false);
  const [Loading, SetLoading] = React.useState(false);
  const [Playing, SetPlaying] = React.useState(false);

  const FileType = GetFileType();
  const sound = React.useRef(new Audio.Sound());

  useEffect(() => {
    switch (FileType) {
      case "audio":
        LoadAudio();
        return () => UnloadAudio();

      case "video":
        break;
    }
  }, [content.link]);

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
    sound.current.setOnPlaybackStatusUpdate((status) => {
      PlaybackUpdate(status);
    });

    SetLoaded(false);
    SetLoading(true);
    SetPlaying(false);
    const checkLoading = await sound.current.getStatusAsync();
    if (checkLoading.isLoaded === false) {
      try {
        const result = await sound.current.loadAsync(
          { uri: content.link },
          {},
          true
        );
        if (result.isLoaded === false) {
          SetLoading(false);
          console.log("Error in Loading Audio");
        } else {
          SetLoading(false);
          PlayAudio();
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

  return (
    <SafeAreaView style={MediaPlayerStyles.container}>
      <View style={MediaPlayerStyles.informationSection}>
        <Image
          style={MediaPlayerStyles.cover}
          source={{ uri: content.thumbnail }}
        />
        <View style={MediaPlayerStyles.information}>
          <Text style={MediaPlayerStyles.title}>{content.title}</Text>
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
        ></Slider>
        <View style={MediaPlayerStyles.contentProgress}>
          <Text style={MediaPlayerStyles.progressCounter}>
            {SecondsToHMS(contentProgress)}
          </Text>
          <Text style={MediaPlayerStyles.progressCounter}>
            {SecondsToHMS(contentDuration)}
          </Text>
        </View>

        <View style={MediaPlayerStyles.progressControls}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <Image
              style={MediaPlayerStyles.switchTrackIcon}
              source={icons.previousTrack}
            />
          </TouchableWithoutFeedback>
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
          <TouchableWithoutFeedback onPress={() => {}}>
            <Image
              style={MediaPlayerStyles.switchTrackIcon}
              source={icons.nextTrack}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
}
