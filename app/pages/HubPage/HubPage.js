//React - Expo dependencies
import React, { useContext, useEffect } from "react";

//firebase
import firebase from "firebase";

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
import { UserContext } from "../../utils/Contexts/UserContext";
import { loggingOut } from "../../../API/firebaseMethods";

export default function HubPage({ navigation }) {
  const { userState } = useContext(UserContext);

  useEffect(() => {
    let userInfo = userState.value;
    let bookmarksID = userState.value.userData.bookmarks;
    userInfo.userData.bookmarks = [];

    try {
      const db = firebase.firestore();
      bookmarksID.forEach((contentID) => {
        db.collection("Content")
          .doc(contentID)
          .get()
          .then((doc) => {
            let contentData = {
              id: doc.id,
              title: doc.data().title,
              thumbnail: doc.data().thumbnail,
              link: doc.data().link,
              duration: doc.data().duration,
            };

            if (!userInfo.userData.bookmarks.includes(contentData)) {
              userInfo.userData.bookmarks.push(contentData);
            }
            userState.setter(userInfo);
          });
      });
    } catch (error) {
      Alert.alert("There is something wrong!", error.message);
    }
    // userState.setter(JSON.parse(route.params.userInfo));
  }, []);

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
