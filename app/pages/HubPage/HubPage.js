//React - Expo dependencies
import React from "react";
import { Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

//Firebase
import { loggingOut } from "../../../API/firebaseMethods";

//Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Pages
import HomePage from "../HomePage/HomePage";
import BookmarksPage from "../BookmarksPage/BookmarksPage";
import ProfilePage from "../ProfilePage/ProfilePage";

const Tab = createBottomTabNavigator();

export default function HubPage({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      defaultScreenOptions={"Inicio"}
    >
      <Tab.Screen name="Inicio" component={HomePage} />
      <Tab.Screen name="Favoritos" component={BookmarksPage} />
      <Tab.Screen name="Perfil" component={ProfilePage} />
    </Tab.Navigator>
  );
} //closes HubPage JSX
