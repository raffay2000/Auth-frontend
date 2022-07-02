import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/mainScreens/Welcome';

const Stack = createNativeStackNavigator();


const MainRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Welcome" component={Welcome} />
  </Stack.Navigator>
  )
}

export default MainRoutes