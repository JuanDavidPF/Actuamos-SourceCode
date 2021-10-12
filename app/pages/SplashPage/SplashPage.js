//React Imports

import React from "react";
import { View, Text, Image } from "react-native";

//Firebase Imports
import firebase from "firebase";
import { SplashPageStyles } from "./SplashPageStyles";

export default function SplashPage({ navigation }) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      fetchUserData();
    } else {
      navigation.replace("Login");
    }
  });
  const fetchUserData = () => {
    try {
      const db = firebase.firestore();

      db.collection("Users")
        .doc(firebase.auth().currentUser.email)
        .get()
        .then((doc) => {
          let userState = {
            user: firebase.auth().currentUser,
            userData: doc.data(),
          };
          userState = JSON.stringify(userState);
          navigation.replace("Hub", { userInfo: userState });
        });
    } catch (err) {
      Alert.alert("There is something wrong!", err.message);
    }
  }; //closes fetchUserData method

  return (
    <View style={SplashPageStyles.container}>
      <Image
        source={require("../../assets/images/isotype.png")}
        style={SplashPageStyles.isotype}
      />
      <Image
        source={require("../../assets/images/logotype.png")}
        style={SplashPageStyles.logotype}
      />
      <Text style={SplashPageStyles.slogan}>Siempre pensando en tí</Text>
    </View>
  );
}
