//React - Expo dependencies
import React from "react";
import AppLoading from "expo-app-loading";

//Stack navigation
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

//Pages
import SplashPage from "./app/pages/SplashPage/SplashPage";

//Fonts
import { Comfortaa_300Light, useFonts } from "@expo-google-fonts/comfortaa";

export default function App() {
  let [fontsLoaded] = useFonts({
    Comfortaa_Light: Comfortaa_300Light,
  });

  if (!fontsLoaded) return <AppLoading />;
  else
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={SplashPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
