//React - Expo dependencies
import React from "react";
import AppLoading from "expo-app-loading";

//Stack navigation
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

//Pages
import SplashPage from "./app/pages/SplashPage/SplashPage";
import LoginPage from "./app/pages/LoginPage/LoginPage";

//Fonts
import { Comfortaa_300Light, useFonts } from "@expo-google-fonts/comfortaa";
import {
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";

export default function App() {
  let [fontsLoaded] = useFonts({
    Comfortaa_Light: Comfortaa_300Light,
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
        </Stack.Navigator>
      </NavigationContainer>
    );
}
