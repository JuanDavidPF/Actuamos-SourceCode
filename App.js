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

import { LogBox, Platform, StatusBar, Text, View } from "react-native";
import { MediaContext } from "./app/utils/Contexts/MediaContext";
import { UserContext } from "./app/utils/Contexts/UserContext";
import { loggingOut } from "./API/firebaseMethods";
import { ScrollView } from "react-native-gesture-handler";

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

  const [consoleEnable, SetConsoleEnable] = useState(false);
  const [logMessage, setLogMessage] = useState("App starting");

  useEffect(() => {
    setTimeout(() => {
      HandleUserAuthState(firebase.auth().currentUser);
      ListenAuthChanges();
    }, 1000);
  }, []);

  useEffect(() => {
    if (fetchingFinished) {
      setLogMessage(`${logMessage}\nAnalyzing user`);
      if (navigationRef.current?.isReady) {
        if (firebase.auth().currentUser.displayName) {
          setLogMessage(`${logMessage}\nUser has a name, going to Home`);
          navigationRef.current.dispatch(StackActions.replace("Hub"));
        } else {
          setLogMessage(
            `${logMessage}\nUser has not a name, going to Test page`
          );
          navigationRef.current.dispatch(StackActions.replace("WelcomePage"));
          setfetchingFinished(false);
        }
      }
    }
  }, [fetchingFinished]);

  useEffect(() => {
    if (userState) {
      setLogMessage(`${logMessage}\nData saved!`);
      setfetchingFinished(true);
    }
  }, [userState]);

  const ListenAuthChanges = () => {
    firebase.auth().onAuthStateChanged((user) => {
      setLogMessage(`${logMessage}\nUser auth changed`);
      setTimeout(() => {
        HandleUserAuthState(user);
      }, 1000);
    });
  };

  const HandleUserAuthState = (user) => {
    setLogMessage(`${logMessage}Handeling user data`);
    if (user) {
      setLogMessage(
        `${logMessage}\nHandeling user data\nAn user was found or logged, fetching user info`
      );
      navigationRef.current.dispatch(StackActions.replace("Splash"));
      fetchUserData();
    } else if (!user) {
      setLogMessage(
        `${logMessage}\nHandeling user data\nUser Wasn't found, going to login`
      );
      navigationRef.current.dispatch(StackActions.replace("Login"));
    }
  };

  const fetchUserData = () => {
    try {
      setfetchingFinished(false);
      const db = firebase.firestore();
      const auth = firebase.auth();

      setLogMessage(`${logMessage}\nTrying to fetch data from firebase"`);
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
          setLogMessage(`${logMessage}\nData found, saving data`);
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
          {consoleEnable && (
            <View
              style={{
                marginTop: StatusBar.currentHeight,
                height: 150,
                position: "absolute",

                width: "100%",
                opacity: 0.5,
              }}
            >
              <ScrollView>
                <Text
                  style={{
                    backgroundColor: "tomato",

                    color: "white",
                    padding: 10,
                    fontSize: 15,
                  }}
                >
                  {logMessage}
                </Text>
              </ScrollView>
            </View>
          )}
        </MediaContext.Provider>
      </UserContext.Provider>
    );
} //closes App component
