//React - Expo dependencies
import React, { useState } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Carousel from "react-native-snap-carousel";
import PlayListCard from "../../components/PlaylistCard/PlaylistCard";
import PlaylistCarousel from "../../components/PlaylistCarousel/PlaylistCarousel";

//Styles
import { HomePageStyles } from "./HomePageStyles";

export default function HomePage({ navigation }) {
  [userName, setUsername] = useState("Apreciad@");
  [playlist, setPlaylist] = useState([
    {
      title: "Item 1",
      text: "Text 1",
    },
    {
      title: "Item 1",
      text: "Text 1",
    },
    {
      title: "Item 1",
      text: "Text 1",
    },
    {
      title: "Item 1",
      text: "Text 1",
    },
    {
      title: "Item 1",
      text: "Text 1",
    },
    {
      title: "Item 1",
      text: "Text 1",
    },
    {
      title: "Item 1",
      text: "Text 1",
    },
    {
      title: "Item 1",
      text: "Text 1",
    },
  ]);

  return (
    <ScrollView style={HomePageStyles.container}>
      <View style={HomePageStyles.greetingSection}>
        <Text style={HomePageStyles.greetingTitle}>¡Hola!</Text>
        <Text style={HomePageStyles.greetingName}>{userName}</Text>
        <Text style={HomePageStyles.greetingDescription}>
          Nos gustaría saber que frase describe aquello que esconde tu ser
          interior el día de hoy.
        </Text>
      </View>

      <PlaylistCarousel list={playlist} card={PlayListCard} />
    </ScrollView>
  );
} //closes HomePage JSX
