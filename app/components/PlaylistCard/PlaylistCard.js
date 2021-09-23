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
      onPress={() => props.onPress(props.title)}
    >
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
