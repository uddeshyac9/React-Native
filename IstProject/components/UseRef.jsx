import React,{useRef} from 'react'
import { View,TextInput,StyleSheet,
    Text,Button
 } from 'react-native'

function UseRef() {
    const input = useRef();
    const updateInput = () => {
     input.current.focus()
     input.current.setNativeProps({
        fontSize:24,
        color:'green'
     })
    }
    return (
        <View>
            <Text style={{textAlign:'center',marginTop:5,fontSize:20}}> Use Ref Hook </Text>
            <TextInput ref={input} style={styles.input} placeholder='Enter Name'/>
            <TextInput style={styles.input} placeholder='Enter Password'/>
            <Button title='Update Input' onPress={updateInput}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    input : {
        borderWidth:1,
        borderColor: 'white',
        padding:5,
        marginTop:10,
        marginBottom:10
    }

})


export default UseRef;
