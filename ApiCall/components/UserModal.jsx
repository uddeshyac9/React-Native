import React, { useEffect, useState } from 'react'
import { View,StyleSheet,Text,Button,TextInput, Alert} from 'react-native'

function UserModal(props) {
    const selectedUser = props.selectedUser;
    const [username, setUsername] = useState('')
    const [fullname, setFullname] = useState('')
    const [email,setEmail] = useState('')
    const [age, setAge] = useState('')
    useEffect(() => {
      if(selectedUser) {
        setFullname(selectedUser.fullname)
        setUsername(selectedUser.username)
        setEmail(selectedUser.email)
        setAge(selectedUser.age.toString())
      }

    },[selectedUser])
  // console.log(selectedUser)

  const updateUser = async () => {
    const url = 'http://192.168.1.20:3000/users';
    const id = selectedUser.id;
    try {
      let result =  await fetch(`${url}/${id}`, {
        method:'Put',
        headers: {
          "Content-Type" : "application/json"
        }, 
        body: JSON.stringify({fullname,username,email,age})
      });
      if(result.ok) {
        console.log('User Updated Successfully')
        Alert.alert("User Updated Successfully")
        props.fetchUsers()
        props.setShowModal(false)
      } else {
        console.log("User Update failed. Server responded with:", result.status, result.statusText);
        Alert.alert("User Update Failed");
      }
    } catch (error) {
      console.error("Error Updating user:", error.message);
      Alert.alert("Error Updating User");
      
    }
  }
     return (
        
        <View style={styles.centerView}>
          <View style={styles.modalView}>
          <Text style={styles.modalText}>Update Fullname</Text>
           <TextInput style={styles.input} value={fullname} onChangeText={(text) => setFullname(text)}/>
          <Text style={styles.modalText}>Update Username</Text>
           <TextInput style={styles.input} value={username} onChangeText={(text) => setUsername(text)}/>
           <Text style={styles.modalText}>Update Email</Text>
           <TextInput style={styles.input} value={email} onChangeText={(text) => setEmail(text)}/>
           <Text style={styles.modalText}>Update Age</Text>
           <TextInput style={styles.input} keyboardType='numeric' value={age} onChangeText={(newage) => setAge(newage)}/>
           <View style={{marginBottom:10}}>
            <Button title='Save' onPress={updateUser}/>
           </View>
          <Button title='Close' onPress={() => props.setShowModal(false)}/>
          </View>
       
        </View>
    

    )
}
const styles = StyleSheet.create({
    centerView: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      modalView:{
        backgroundColor:'#fff',
        padding:60,
        borderRadius:10,
        shadowColor:'#000',
        shadowOpacity:0.60,
        elevation:5
      } ,
       modalText: {
        color:'black'
      },
      input: {
        borderWidth:1,
        borderColor:'skyblue',
        width:300,
        marginBottom:10,
        color:'black'
      }
})

export default UserModal
