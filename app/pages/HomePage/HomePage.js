//React - Expo dependencies
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

//firebase
import firebase from "firebase";

import PlaylistCarousel from "../../components/PlaylistCarousel/PlaylistCarousel";
import PlayListPage from "../PlaylistPage/PlaylistPage";

//navigation
const Stack = createNativeStackNavigator();

//Styles
import { HomePageStyles } from "./HomePageStyles";

export default function HomePage({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={PlaylistSelectionPage} />
      <Stack.Screen name="Playlist" component={PlayListPage} />
    </Stack.Navigator>
  );
} //closes HomePage JSX

const PlaylistSelectionPage = ({ navigation }) => {
  const handleCardSelection = (item, index) => {
    setCurrentCard(index);
    navigation.navigate("Playlist", {
      playlist: item,
    });
  };

  [userName, setUsername] = useState("Apreciad@");
  [playlists, setPlaylists] = useState();
  [currentCard, setCurrentCard] = useState(0);

  React.useEffect(() => {
    try {
      const db = firebase.firestore();
      let array = [];

      db.collection("Playlists")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            playlist = {
              id: doc.id,
              title: doc.data().title,
              thumbnail: doc.data().thumbnail,
              content: doc.data().content,
            };
            array.push(playlist);
          });
          array = JSON.parse(JSON.stringify(array));
          setPlaylists(array);
        });
    } catch (err) {
      Alert.alert("There is something wrong!", err.message);
    }
  }, []);

  return (
    <SafeAreaView style={HomePageStyles.container}>
      <View style={HomePageStyles.greetingSection}>
        <Text style={HomePageStyles.greetingTitle}>¡Hola!</Text>
        <Text style={HomePageStyles.greetingName}>{userName}</Text>
        <Text style={HomePageStyles.greetingDescription}>
          Cuentanos: ¿Con que frase te identificas mejor en este momento?
        </Text>
      </View>

      <PlaylistCarousel
        list={playlists}
        onCardSelected={handleCardSelection}
        currentCard={currentCard}
      />
    </SafeAreaView>
  );
};
