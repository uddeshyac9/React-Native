import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
    
      <NavigationContainer>
      <Header/>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Shopping Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast/>
    </Provider>
  );
}

export default App;
