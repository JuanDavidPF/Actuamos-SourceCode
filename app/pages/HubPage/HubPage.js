//React - Expo dependencies
import React from "react";
//navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

//pages
import HomePage from "../../pages/HomePage/HomePage";
import BookmarksPage from "../../pages/BookmarksPage/BookmarksPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import MediaPlayer from "../../components/MediaPlayer/MediaPlayer";
//styles
import { AppColors } from "../../config/AppColors";
import BottomNavbarIcon from "../../components/BottomNavbarIcon/BottomNavbarIcon";
import { HubPageStyles } from "./HubPageStyles";

export default function HubPage({ navigation }) {
  return (
    <Tab.Navigator
      backBehavior={"initialRoute"}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: HubPageStyles.container,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          return <BottomNavbarIcon tabName={route.name} focused={focused} />;
        },
        tabBarActiveTintColor: AppColors.accent,
        tabBarInactiveTintColor: AppColors.accent,
      })}
      initialRouteName="Inicio"
    >
      <Tab.Screen name="Inicio" component={HomePage} />
      <Tab.Screen name="Favoritos" component={BookmarksPage} />
      <Tab.Screen name="Perfil" component={ProfilePage} />
      <Tab.Screen
        name="Reproductor"
        options={{
          tabBarButton: () => null,
          tabBarVisible: false, // if you don't want to see the tab bar
        }}
        component={MediaPlayer}
      />
    </Tab.Navigator>
  );
} //closes HubPage JSX
