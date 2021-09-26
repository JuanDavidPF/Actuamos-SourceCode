import { LightenDarkenColor } from "lighten-darken-color";
import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { AppColors } from "../../config/AppColors";

import { PlaylistCardStyles } from "./PlaylistCardStyles";

export default function PlayListCard(props) {
  return (
    <TouchableHighlight
      style={{ borderRadius: 20 }}
      activeOpacity={1}
      underlayColor={AppColors.violet}
      onPress={() => props.onPress(props.data, props.index)}
    >
      <View style={PlaylistCardStyles.container}>
        <Image
          style={PlaylistCardStyles.cardImage}
          source={
            props.data.thumbnail
              ? { uri: props.data.thumbnail }
              : require("../../assets/images/icons/splash.png")
          }
        ></Image>

        <Text style={PlaylistCardStyles.cardTitle}>
          {props.data.title || '"Lorem Ipsum"'}
        </Text>
      </View>
    </TouchableHighlight>
  );
}
