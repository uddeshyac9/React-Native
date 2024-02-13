import React from 'react'
import { View,StyleSheet } from 'react-native'
import AddUsers from './components/AddUsers.jsx'


function App() {
  return (
    <View style={styles.container}>
      <AddUsers/>
    </View>
    
  )
}

const styles =  StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'pink'
  },
})
export default App
