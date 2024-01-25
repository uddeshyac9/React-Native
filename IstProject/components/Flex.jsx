import React from 'react';
import { View,
         Text ,
         StyleSheet} from 'react-native';

function Flex() {
    return (
        <View style={styles.container}> 
        <View style={styles.box1}>
            <View style={styles.innerBox1}></View>
            <View style={styles.innerBox2}></View>
            <View style={styles.innerBox3}></View>
            
        </View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
            
        </View>
        
    )
}

export default Flex;

 const styles = StyleSheet.create({
    container : {
        flex:1,
        
    },
    box1: {flex:2, 
        flexDirection:'row',
        backgroundColor:'orange'},

        box2: {flex:.5,
             backgroundColor:'pink'},

             box3: {flex:1,
                backgroundColor:'blue'},
                
                innerBox1: {
                    flex:1,
                    backgroundColor:'orange'
                },
                innerBox2: {
                    flex:1,
                    backgroundColor:'white'
                },
                innerBox3: {
                    flex:1,
                    backgroundColor:'green'
                },
                

 } )

