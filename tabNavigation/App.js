import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import JokesList from './components/JokesList';

function App() {
  const Tab = createMaterialTopTabNavigator()
  //  const Tab = createBottomTabNavigator(); 
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Login' component={Login} />
        <Tab.Screen name='Signup' component={Signup} />
        <Tab.Screen name='About' component={About} />
        <Tab.Screen name='Jokes' component={JokesList} />
      
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
