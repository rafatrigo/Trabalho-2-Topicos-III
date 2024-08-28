import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
