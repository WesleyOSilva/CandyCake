import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import CandyCake from './screens/Principal';


const Stack = createStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CandyCake" component={CandyCake} />
    </Stack.Navigator>
   
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

