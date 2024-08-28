import 'react-native-url-polyfill/auto'

import React, { useState, useEffect } from "react"

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar 
        backgroundColor="#871cfe"
        barStyle="light-content"
      />
      <Routes />
    </NavigationContainer>
  );
}
