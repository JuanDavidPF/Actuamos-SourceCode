//React - Expo dependencies
import React from "react";
import AppLoading from "expo-app-loading";

//Firebase
import firebase from "firebase";
import apiKeys from "./app/config/keys";

//Stack navigation
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

// //Pages

import SplashPage from "./app/pages/SplashPage/SplashPage";
import LoginPage from "./app/pages/LoginPage/LoginPage";
import HubPage from "./app/pages/HubPage/HubPage";

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
import { LogBox } from "react-native";

export default function App() {
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
  });

  if (!fontsLoaded) return <AppLoading />;
  else
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Splash" component={SplashPage} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Hub" component={HubPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
