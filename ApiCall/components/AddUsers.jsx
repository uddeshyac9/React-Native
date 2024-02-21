import React, { useState } from 'react'
import uuid from 'react-native-uuid';
import { View, Text, StyleSheet,TextInput, Button,Alert } from 'react-native';

function AddUsers() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [fullname, setFullname] = useState('')
  const [age, setAge] = useState('')
 
  const validateFields = () => {
    if (!username || !email || !fullname || !age) {
      Alert.alert('Validation Error', 'Please fill in all fields');
      return false;
    } 
    return true;
  }
  

  const PostApiCall = async () => {
    const uniqueId = uuid.v4();
    const apiurl = "http://192.168.1.20:3000/users";
    // const apiurl = "http://10.0.2.2:3000/users";
    if (!validateFields()) {
        // Validation failed, do not proceed with API call
        return;
      }
    
    

  
    try {
      const response = await fetch(apiurl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: uniqueId,
          username: username,
          email: email,
          fullname: fullname,
          age: age,
        }),
      });
  
      // Check if the response status is within the success range (200-299)
      if (response.ok) {
        console.log('Data Saved Successfully');
        alert('Data Saved Successfully');
        // Show a success toast or perform any other success-related action
        setUsername('')
        setEmail('')
        setFullname('')
        setAge(0)
      } else {
        alert('Data Not Saved Successullfy')
        console.log('Data Not Saved Successfully. Server responded with:', response.status, response.statusText);
        // Show an error toast or perform any other error-related action
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Show an error toast or perform any other error-related action
    }
  };
  
  
    return (
        <View style={styles.container}>
            <Text style={styles.header}> Add User by Post Api Call</Text>
            <TextInput type="text" value={username} placeholder='enter username'   placeholderTextColor="grey" style={styles.input} onChangeText={(newusername) => setUsername(newusername)}/>
            
            <TextInput type="email" value={email} placeholder='enter email'   placeholderTextColor="grey" style={styles.input} onChangeText={(Newemail) => setEmail(Newemail)}/>

            <TextInput type="text" value={fullname} placeholder='enter fullName' placeholderTextColor="grey"  style={styles.input} onChangeText={(newfullname) => setFullname(newfullname)}/>

            <TextInput keyboardType='numeric' value={age} placeholder='enter age' placeholderTextColor="grey" style={styles.input} onChangeText={(newage) => setAge(newage)} />

            <Button title='Save Data' onPress={() => PostApiCall()}/>

        </View>
        
    )
}
  const styles =  StyleSheet.create({
    container:{
        
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8,
        
    },
    header: {
   fontSize: 20,
   textAlign:'center',
   color:'black'
    },
    input: {
        borderColor:'red',
        borderWidth: 1,
        margin: 20,
        color:'blue',
        fontSize: 18,
    }
  })
export default AddUsers