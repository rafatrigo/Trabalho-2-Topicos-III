import 'react-native-url-polyfill/auto'

import React, { useState, useEffect } from "react"

import { View, Text } from 'react-native'

import { Session } from '@supabase/supabase-js'

import Auth from './src/components/Auth'
import { supabase } from './src/services/supabase'
import { NavigationContainer } from "@react-navigation/native";
import { ScreenStack } from 'react-native-screens'
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
