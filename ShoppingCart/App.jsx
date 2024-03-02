import React from 'react'
import { View,ScrollView } from 'react-native'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <ScrollView style={{backgroundColor:'#fff', flex:1}}>
      <Header/>
      <Home/>
    </ScrollView>
    
  )
}

export default App

