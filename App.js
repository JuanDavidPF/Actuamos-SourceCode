//React - Expo dependencies
import React, { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";

//Firebase
import firebase from "firebase";
import apiKeys from "./app/config/keys";

//Stack navigation
import { StackActions } from "@react-navigation/routers";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
const Stack = createNativeStackNavigator();

// //Pages

import SplashPage from "./app/pages/SplashPage/SplashPage";
import LoginPage from "./app/pages/LoginPage/LoginPage";
import HubPage from "./app/pages/HubPage/HubPage";
import WelcomePage from "./app/pages/WelcomePage/WelcomePage";

//Fonts
import {
  Comfortaa_300Light,
  Comfortaa_400Regular,
  Comfortaa_700Bold,
  useFonts,
} from "@expo-google-fonts/comfortaa";
import {
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";

import { LogBox } from "react-native";
import { MediaContext } from "./app/utils/Contexts/MediaContext";
import { UserContext } from "./app/utils/Contexts/UserContext";
import { loggingOut } from "./API/firebaseMethods";

export default function App() {
  const navigationRef = useNavigationContainerRef();
  LogBox.ignoreLogs(["Setting a timer"]);
  //firebase initialization
  if (!firebase.apps.length) {
    console.log("Connected with Firebase");
    firebase.initializeApp(apiKeys.firebaseConfig);
  }
  //fonts initialization
  let [fontsLoaded] = useFonts({
    //Comfortaa Family---------------------
    Comfortaa_Light: Comfortaa_300Light,
    Comfortaa_Regular: Comfortaa_400Regular,
    Comfortaa_Bold: Comfortaa_700Bold,
    //Lato Family--------------------------
    Lato_Bold: Lato_700Bold,
    Lato_Light: Lato_300Light,
    Lato_Regular: Lato_400Regular,
    //Poppins Family--------------------------
    Poppins_Regular: Poppins_400Regular,
  });

  const [fetchingFinished, setfetchingFinished] = useState(false);
  const [content, setContent] = useState();
  const [playlist, setPlaylist] = useState();
  const [playlistArray, setPlaylistArray] = useState([]);
  const [userState, setUserState] = useState();

  useEffect(() => {
    ListenAuthChanges();
  }, []);

  useEffect(() => {
    if (fetchingFinished && navigationRef.current.isReady) {
      setfetchingFinished(false);

      if (navigationRef.current.isReady) {
        if (firebase.auth().currentUser.displayName)
          navigationRef.current.dispatch(StackActions.replace("Hub"));
        else
          navigationRef.current.dispatch(StackActions.replace("WelcomePage"));
      }
    }
  }, [fetchingFinished]);

  useEffect(() => {
    if (userState) setfetchingFinished(true);
  }, [userState]);

  const ListenAuthChanges = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if (navigationRef.current.isReady)
          navigationRef.current.dispatch(StackActions.replace("Splash"));
        fetchUserData();
      } else if (!user) {
        if (navigationRef.current.isReady)
          navigationRef.current.dispatch(StackActions.replace("Login"));
      }
    });
  };

  const fetchUserData = () => {
    try {
      setfetchingFinished(false);
      const db = firebase.firestore();
      const auth = firebase.auth();

      let data = {
        authData: auth.currentUser,
        userData: {
          bookmarks: [],
        },
      };

      db.collection("Users")
        .doc(auth.currentUser.uid)
        .get()
        .then((doc) => {
          if (doc.data()) {
            if (doc.data().bookmarks)
              data.userData.bookmarks = doc.data().bookmarks;
          }

          setUserState(JSON.parse(JSON.stringify(data)));
        });
    } catch (err) {
      Alert.alert("¡Hubo un problema!", err.message);
    }
  }; //closes fetchUserData method

  if (!fontsLoaded) return <AppLoading />;
  else
    return (
      <UserContext.Provider
        value={{ userState: { value: userState, setter: setUserState } }}
      >
        <MediaContext.Provider
          value={{
            content: {
              value: content,
              setter: setContent,
            },
            playlist: { value: playlist, setter: setPlaylist },
            playlistArray: { value: playlistArray, setter: setPlaylistArray },
          }}
        >
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
              initialRouteName="Splash"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Splash" component={SplashPage} />
              <Stack.Screen name="Login" component={LoginPage} />
              <Stack.Screen name="WelcomePage" component={WelcomePage} />
              <Stack.Screen name="Hub" component={HubPage} />
            </Stack.Navigator>
          </NavigationContainer>
        </MediaContext.Provider>
      </UserContext.Provider>
    );
} //closes App component
