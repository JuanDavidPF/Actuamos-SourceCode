//Import react - react-native
import React from "react";

//styles
import { BottomNavigationBarStyles } from "./BottomNavigationBarStyles";

//navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//pages
import BookmarksPage from "../../pages/BookmarksPage/BookmarksPage";
import HomePage from "../../pages/HomePage/HomePage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";

const Tab = createBottomTabNavigator();

export default function BottomNavigationBar({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: BottomNavigationBarStyles.container,
      })}
      initialRouteName="Inicio"
    >
      <Tab.Screen name="Inicio" component={HomePage} />
      <Tab.Screen name="Favoritos" component={BookmarksPage} />
      <Tab.Screen name="Perfil" component={ProfilePage} />
    </Tab.Navigator>
  );
} //closes HubPage JSX
