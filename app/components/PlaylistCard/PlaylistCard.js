import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

import { PlaylistCardStyles } from "./PlaylistCardStyles";

export default function PlayListCard(props) {
  return (
    <TouchableHighlight>
      <View style={PlaylistCardStyles.container}>
        <Image
          style={PlaylistCardStyles.cardImage}
          source={
            props.image || require("../../assets/images/icons/splash.png")
          }
        ></Image>

        <Text style={PlaylistCardStyles.cardTitle}>
          {props.title || '"Lorem Ipsum"'}
        </Text>
      </View>
    </TouchableHighlight>
  );
}
