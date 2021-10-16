//React - Expo dependencies
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext, useEffect, useState } from "react";
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
import { MediaContext } from "../../utils/Contexts/MediaContext";
import { UserContext } from "../../utils/Contexts/UserContext";

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
  const { playlist, playlistArray } = useContext(MediaContext);

  const { userState } = useContext(UserContext);
  const [userName, setUsername] = useState(
    userState.value.authData.displayName || "Apreciad@"
  );

  useEffect(() => {
    if (playlist.value) {
      try {
        playlistArray.setter([]);
        let contentFetched = [];
        const db = firebase.firestore();

        playlist.value.content.forEach((contentDocID) => {
          db.collection("Content")
            .doc(contentDocID)
            .get()
            .then((doc) => {
              let contentData = {
                id: doc.id,
                title: doc.data().title,
                thumbnail: doc.data().thumbnail,
                link: doc.data().link,
              };

              if (!contentFetched.includes(contentData) && contentData.link) {
                contentFetched.push(contentData);
              }
              playlistArray.setter(contentFetched);
            });
        });
      } catch (err) {
        Alert.alert("There is something wrong!", err.message);
      }
    }
  }, [playlist.value]);

  const handleCardSelection = (item, index) => {
    setCurrentCard(index);
    playlist.setter(item);

    navigation.navigate("Playlist");
  };

  const [playlists, setPlaylists] = useState();
  const [currentCard, setCurrentCard] = useState(0);

  React.useEffect(() => {
    try {
      const db = firebase.firestore();
      let array = [];

      db.collection("Playlists")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            let playlist = {
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
