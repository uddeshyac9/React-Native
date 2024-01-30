import React, { useState } from 'react'
import { View ,StyleSheet, Text, StatusBar,Button} from 'react-native'

function StatusBarChange() {
  const [show, setShow] = useState(false);
    return (
        <View style={styles.container}>
      <Text style={styles.title}>Status Bar</Text>
      <StatusBar 
        backgroundColor='blue'
        barStyle='default'
        hidden={show}/>

        <Button title='Toggle StatusBar' onPress={() => setShow(!show)}/>
        </View>
        
    )
}

export default StatusBarChange

const styles = StyleSheet.create({
    container: {
      marginTop:50,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }, 
     title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color:'#fff',
      textAlign:'center'
    },
})
