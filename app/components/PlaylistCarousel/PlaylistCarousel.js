import React from "react";
import { ActivityIndicator, Dimensions, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { AppColors } from "../../config/AppColors";

const Screen = Dimensions.get("window");
export default function PlaylistCarousel(props) {
  return (
    <View
      style={{
        marginTop: 50,
      }}
    >
      {props.list ? (
        <Carousel
          enableMomentum={false}
          decelerationRate={"fast"}
          layout={"default"}
          sliderWidth={Screen.width}
          itemWidth={Screen.width * 0.65}
          renderItem={props.card || (() => {})}
          data={props.list || []}
        ></Carousel>
      ) : (
        <ActivityIndicator size="large" color={AppColors.accent} />
      )}
    </View>
  );
}
