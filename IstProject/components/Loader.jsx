import React, { useState } from 'react'
import { View,StyleSheet ,Button} from 'react-native'
import { ActivityIndicator } from 'react-native-paper';

function Loader() {
    const [show, setShow] = useState(false);
  

    return (
        <View style={styles.container}>
         <ActivityIndicator size={100} color='red' animating={show} style={{ marginBottom:20}}/>
         <Button title={show ? 'Hide Loader' : 'Show Loader'} onPress={() => setShow(!show)}/>
        </View>
        
    )
}

export default Loader

const styles = StyleSheet.create({
    container : {
        flex:1,
        marginTop:100,
       
        justifyContent:'center',
        alignItems:'center'
    },
})
