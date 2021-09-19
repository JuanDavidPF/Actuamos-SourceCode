//Import react - react-native
import React from "react";

//styles
import { BottomNavigationBarStyles } from "./BottomNavigationBarStyles";
//navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//pages
import HomePage from "../../pages/HomePage/HomePage";
import BookmarksPage from "../../pages/BookmarksPage/BookmarksPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import { AppColors } from "../../config/AppColors";
import BottomNavbarIcon from "../../components/BottomNavbarIcon/BottomNavbarIcon";

const Tab = createBottomTabNavigator();

export default function BottomNavigationBar({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: BottomNavigationBarStyles.container,
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
    </Tab.Navigator>
  );
} //closes HubPage JSX
