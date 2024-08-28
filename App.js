// import 'react-native-url-polyfill/auto'

import React, { useState, useEffect, useContext } from "react";

import { View, Text } from "react-native";

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Session } from "@supabase/supabase-js";

import Auth from "./src/components/Auth";
import { supabase } from "./src/services/supabase";
import { NavigationContainer } from "@react-navigation/native";
import { ScreenStack } from "react-native-screens";
import Welcome from "./src/pages/Welcome";
import Home from "./src/pages/Home";
import SignIn from './src/pages/SignIn';
import Routes from "./src/routes";
import AddRecord from './src/pages/AddRecord'


import AuthProvider from "./src/routes/AuthContext";

import { AuthContext } from "./src/routes/AuthContext";

const Stack = createNativeStackNavigator();

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  
  return (
    <AuthProvider>

      <NavigationContainer>

        <Routes />
        
        {/* {session && session.user ? <Home session={session} /> : <Auth />}
        <Routes 
          options={{ headerShown: false }}
        /> */}

      </NavigationContainer>
    </AuthProvider>
  );
}
