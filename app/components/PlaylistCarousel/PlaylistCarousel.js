import React from "react";
import { Dimensions, View } from "react-native";
import Carousel from "react-native-snap-carousel";

const Screen = Dimensions.get("window");
export default function PlaylistCarousel(props) {
  return (
    <View
      style={{
        marginTop: 50,
        alignItems: "center",
      }}
    >
      <Carousel
        enableMomentum={true}
        decelerationRate={"normal"}
        layout={"default"}
        sliderWidth={Screen.width}
        itemWidth={245}
        renderItem={props.card || (() => {})}
        data={props.list || []}
      ></Carousel>
    </View>
  );
}
