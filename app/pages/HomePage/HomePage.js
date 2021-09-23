//React - Expo dependencies
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

//firebase
import firebase from "firebase";

import PlayListCard from "../../components/PlaylistCard/PlaylistCard";
import PlaylistCarousel from "../../components/PlaylistCarousel/PlaylistCarousel";
import PlayListPage from "../PlaylistPage/PlaylistPage";

//navigation
const Stack = createNativeStackNavigator();

//Styles
import { HomePageStyles } from "./HomePageStyles";
export default function HomePage({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="PlaylistSelection"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={PlaylistSelectionPage} />
      <Stack.Screen name="Playlist" component={PlayListPage} />
    </Stack.Navigator>
  );
} //closes HomePage JSX

const PlaylistSelectionPage = ({ navigation }) => {
  const handleCardSelection = (id) => {
    navigation.navigate("Playlist");
  };

  const renderItem = ({ item, index }) => {
    return (
      <PlayListCard
        title={item.title}
        onPress={handleCardSelection}
      ></PlayListCard>
    );
  };

  [userName, setUsername] = useState("Apreciad@");
  [playlist, setPlaylist] = useState();

  React.useEffect(() => {
    try {
      const db = firebase.firestore();
      let array = [];

      db.collection("Playlists")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            let playlist = { id: doc.id, title: doc.data().title };
            array.push(playlist);
          });
          array = JSON.parse(JSON.stringify(array));
          setPlaylist(array);
        });
    } catch (err) {
      Alert.alert("There is something wrong!", err.message);
    }
  }, []);

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

      <PlaylistCarousel list={playlist} card={renderItem} />
    </ScrollView>
  );
};
