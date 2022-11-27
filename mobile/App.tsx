import React from "react";

import { useFonts } from "@expo-google-fonts/roboto-slab";

import {
  RobotoSlab_100Thin,
  RobotoSlab_200ExtraLight,
  RobotoSlab_300Light,
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
  RobotoSlab_700Bold,
  RobotoSlab_900Black,
} from "@expo-google-fonts/roboto-slab";

import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import Routes from "./src/routes";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoSlab_100Thin,
    RobotoSlab_200ExtraLight,
    RobotoSlab_300Light,
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
    RobotoSlab_700Bold,
    RobotoSlab_900Black,
  });

  if (!fontsLoaded) {
    SplashScreen.hideAsync();
  }

  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" style="dark" />

      <Routes />
    </NavigationContainer>
  );
}