import React from 'react'
import { View,ScrollView } from 'react-native'
import Header from './components/Header'
import Home from './components/Home'
import { Provider } from 'react-redux'
import { store } from './redux/app/store'

function App() {
  return (
    <Provider store={store}>
  <ScrollView style={{backgroundColor:'#fff', flex:1}}>
      <Header/>
      <Home/>
    </ScrollView>
    </Provider>
  
    
  )
}

export default App

