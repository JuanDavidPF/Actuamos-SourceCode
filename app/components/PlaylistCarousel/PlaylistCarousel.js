import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { AppColors } from "../../config/AppColors";
import PlayListCard from "../PlaylistCard/PlaylistCard";

const Screen = Dimensions.get("window");
export default function PlaylistCarousel(props) {
  const [carousel, setCarousel] = useState();
  useEffect(() => {
    if (carousel) {
      carousel.snapToItem(props.currentCard, true);
    }
  }, [props.currentCard]);

  const renderItem = ({ item, index }) => {
    return (
      <PlayListCard
        data={item}
        index={index}
        onPress={props.onCardSelected || (() => {})}
      ></PlayListCard>
    );
  };

  return (
    <View style={props.style}>
      {props.list ? (
        <Carousel
          ref={(c) => {
            setCarousel(c);
          }}
          enableMomentum={true}
          layout={"default"}
          sliderWidth={Screen.width}
          itemWidth={Screen.width * 0.65}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          data={props.list || []}
        ></Carousel>
      ) : (
        <ActivityIndicator size="large" color={AppColors.accent} />
      )}
    </View>
  );
}
