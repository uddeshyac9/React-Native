import React from 'react'
import { View , Text, TextInput} from 'react-native'
import { NavigationContainer } from '@react-navigation/native' 
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';


function App() {
const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={
        {headerStyle:{
          backgroundColor:'orange'
        }}
      }> 
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} options={{
          headerTitle:()=> <Text>Welcome To Home</Text>,
          headerStyle:{
            backgroundColor:'black',
          }, headerRight:()=><TextInput placeholder='Search'/>
        }}/>
        <Stack.Screen name='About' component={About}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App

