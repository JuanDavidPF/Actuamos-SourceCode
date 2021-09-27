//react imports
import React from "react";
import { Text, View } from "react-native";

//styles
import { MediaPlayerStyles } from "./MediaPlayerStyles";
export default function MediaPlayer({ content }) {
  return (
    <View style={MediaPlayerStyles.container}>
      <Text>This is the media player</Text>
    </View>
  );
}
