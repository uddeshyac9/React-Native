import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Text} from 'react-native'

function InputText() {
    const [inputName, SetInputName] = useState('')
    return (
        <View style={{marginTop:50}}>
         <Text style={{margin:10, fontSize:18}}>Your Name is: {inputName}</Text>
         <TextInput
          placeholder = 'Enter Your Name'
          style={styles.inputText}
          value={inputName}
          onChangeText={(text) => SetInputName(text)}
         />

        </View>
        
    )
}

export default InputText;

const styles = StyleSheet.create({
    inputText : {
        fontSize: 18,
        color: 'blue',
        borderWidth:2,
        borderColor: 'blue',
        margin:10
    }
})
