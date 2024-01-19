import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

function FlatListComp(props) {
    let item = props.item;
    return (
        <View style={styles.userContainer}>
               <Text style={styles.username}>Username: {item.username}</Text>
            <Text style={styles.email}>Email: {item.email}</Text>
            <Text style={styles.age}>Age: {item.age}</Text>
        </View>
        
    )
}

export default FlatListComp;

const styles = StyleSheet.create({
    userContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8,
        backgroundColor:'lightblue'
      },
      username: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "black"
      },
      email: {
        fontSize: 14,
        color: 'blue',
      },
      age: {
        fontSize: 14,
        color: "black"
      },
})
