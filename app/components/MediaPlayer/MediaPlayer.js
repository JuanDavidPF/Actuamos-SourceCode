//react imports
import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

import { SafeAreaView } from "react-native-safe-area-context";
import { AppColors } from "../../config/AppColors";
import { SecondsToHMS } from "../../utils/TimeConvertions";

//styles
import { MediaPlayerStyles } from "./MediaPlayerStyles";
export default function MediaPlayer({ route }) {
  const content = route.params.content;
  const [contentProgress, setContentProgress] = useState(0);
  const [contentDuration, setContentDuration] = useState(200);

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
          <TouchableHighlight onPress={() => {}}>
            <Image
              style={MediaPlayerStyles.switchTrackIcon}
              source={require("../../assets/images/icons/contentPlayer/previousTrack.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={MediaPlayerStyles.playTrackBtn}
            underlayColor={AppColors.accent}
            onPress={() => {}}
          >
            <Image
              style={MediaPlayerStyles.playTrackIcon}
              source={require("../../assets/images/icons/contentPlayer/playTrack.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {}}>
            <Image
              style={MediaPlayerStyles.switchTrackIcon}
              source={require("../../assets/images/icons/contentPlayer/nextTrack.png")}
            />
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
}
