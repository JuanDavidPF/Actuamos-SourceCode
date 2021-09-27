import React, { useState } from "react";
import { Image } from "react-native";

import { BottomNavbarIconStyles } from "./BottomNavbarIconStyles";

const navbarIconsPath = "../../assets/images/icons/navbar/";
const iconLibrary = {
  homeFocused: require(navbarIconsPath + "homeFocused.png"),
  bookmarkFocused: require(navbarIconsPath + "bookmarkFocused.png"),
  profileFocused: require(navbarIconsPath + "profileFocused.png"),
  home: require(navbarIconsPath + "home.png"),
  bookmark: require(navbarIconsPath + "bookmark.png"),
  profile: require(navbarIconsPath + "profile.png"),
  undefined: require(navbarIconsPath + "undefined.png"),
  undefinedFocused: require(navbarIconsPath + "undefinedFocused.png"),
};

export default function BottomNavbarIcon(props) {
  let iconPath = "";

  switch (props.tabName) {
    case "Inicio":
      iconPath += "home";
      break;

    case "Favoritos":
      iconPath += "bookmark";
      break;

    case "Perfil":
      iconPath += "profile";
      break;

    default:
      iconPath += "undefined";
      break;
  }

  if (props.focused) iconPath += "Focused";

  return (
    <Image
      source={iconLibrary[iconPath]}
      style={BottomNavbarIconStyles.tabIcon}
    />
  );
} //closes GetButtonNavBarTabIcon
