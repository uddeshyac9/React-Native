import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View,Text ,Button
 } from 'react-native';

function Async_Storage() {
    const [user, setUser] = useState('')
    const setData = async() => {
   await AsyncStorage.setItem('User',"Uddeshya")

    } 
    const getData = async() => {
      const User = await AsyncStorage.getItem('User');
      setUser(User)
     
         }
   
         const removeData = async () => {
            await AsyncStorage.removeItem('User')
            setUser('')

         }

    return (
        <View style={{flex:1, marginTop:10, alignItems:'center'}}>
            <Text style={{fontSize:20 ,marginBottom:10}}>Async Stroage with React Native</Text> 
            <Text style={{marginBottom:10}}>UserName : {user}</Text>
         <Text style={{marginBottom:10}}> <Button title="set Data" onPress={() => setData()}/> </Text>   
          <Text style={{marginBottom:10}}> <Button title="get Data" onPress={() => getData()}/></Text>
          <Button title='Remove Data' onPress={()=> removeData( )}/>  
        </View>
        
    )
}

export default Async_Storage
