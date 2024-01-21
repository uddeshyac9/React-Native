import React,{ useState,useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

function Hooks() {
    const [count, setCount] = useState(0);
 const [data, setData] = useState(1000);
    useEffect(() => {
        console.warn(count)
    },[count])
    return (
        <View style={styles.container}>
              <Text style={styles.header}>Data Value: {data}</Text>
            <Text style={styles.header}>Count Value: {count}</Text>
            <View style={styles.btnContainer}>
                 <View style={styles.button}>
          <Button title='Count +' onPress={() => setCount(count + 1)} />
        </View>
        <View style={styles.button}>
          <Button title=' Count -' onPress={() => setCount(count - 1)} />
        </View>
            </View>
            <View >
          <Button title=' Data -' onPress={() => setData(data - 1)} />
        </View>
        </View>
    )
}

export default Hooks


const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
      padding: 20,
      backgroundColor: '#fff',
    },
    header: {
        textAlign:'center',
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color:'black'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around', // This will evenly space the buttons
        marginTop: 20, // Add margin for separation
        marginBottom:20,
      },
      button: {
        width: '40%', // Set the width of the button to 40% of the screen
      },
    

  });