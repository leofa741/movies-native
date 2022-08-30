import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';



const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown:false,
    cardStyle:{
      backgroundColor:'white'
    }
    }}
     >
        
      <Stack.Screen name="HomeScreen" options={{ title:"Página 1" }} component={ HomeScreen } />
      <Stack.Screen name="DetailScreen" options={{ title:"Página 2" }} component={ DetailScreen } />

    </Stack.Navigator>
  );
}