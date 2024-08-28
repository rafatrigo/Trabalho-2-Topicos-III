import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import AddRecord from '../pages/AddRecord'
import Auth from '../components/Auth';

import { useAuth } from './AuthContext';

const Stack = createNativeStackNavigator();

export default function Routes() {

  
  return (

      // <Stack.Navigator initialRouteName={session && session.user ? 'Home' : 'Auth'}>
      <Stack.Navigator initialRouteName="Auth">
        
        <Stack.Screen 
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="AddRecord"
          component={AddRecord}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

  )
}
