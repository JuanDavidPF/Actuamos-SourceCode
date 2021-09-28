//react imports
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//styles
import { MediaPlayerStyles } from "./MediaPlayerStyles";
export default function MediaPlayer({ route }) {
  const content = route.params.content;

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
      <View style={MediaPlayerStyles.controls}></View>
    </SafeAreaView>
  );
}
