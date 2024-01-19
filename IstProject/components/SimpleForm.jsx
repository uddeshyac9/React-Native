import React, { useState } from 'react'
import { StyleSheet,
     View,
      TextInput,
       Text,
       Button
    } from 'react-native'

function SimpleForm() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [display, setDisplay] = useState(false);
   
const resetDetails = () => {
    setEmail('');
    setName('');
    setPassword('');
    setDisplay(false);
}

    return (
        <View>
       <Text style={{marginTop:40, marginBottom:20,color:'black'}}>Simple Form in React Native</Text>
       <TextInput
          placeholder = 'Enter Your Name'
          style={styles.inputText}
          value={name}
          onChangeText={(text) => setName(text)}
         />
          <TextInput
          placeholder = 'Enter Your email'
          style={styles.inputText}
          value={email}
          onChangeText={(text) => setEmail(text)}
         />
            <TextInput
          placeholder = 'Enter Your password'
          style={styles.inputText}
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
         />
          <View style={styles.container}>
      <Button
        title='Print Details'
        color={'green'}
        onPress={() => setDisplay(true)}
      />
      {/* Add some space between the buttons */}
      <View style={styles.buttonGap} />
      <Button title='Reset Details' onPress={resetDetails}/>
    </View>
  {
    display ?  <View style={styles.detailsContainer}>
            <Text>Your Name is: {name}</Text>
            <Text>Your Email is: {email}</Text>
            <Text>Your Password is: {password}</Text>
         </View> : null
  }
           
        </View>
        
    )
}

export default SimpleForm

const styles = StyleSheet.create({
    inputText : {
        fontSize: 18,
        color: 'blue',
        borderWidth:2,
        borderColor: 'blue',
        margin:10
    },
    container: {
        flexDirection: 'row', // Align buttons horizontally
        justifyContent: 'center', // Center the buttons horizontally
        marginTop: 20,
      },
      buttonGap: {
        marginLeft: 10, // Adjust the margin as needed
      },
      detailsContainer: {
        marginTop: 20,
        padding: 10,
         backgroundColor: 'black', // Background color for the details section
        borderRadius: 5,
      },
})
