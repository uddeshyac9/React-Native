import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Grid from './Grid';

function ShowHide() {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Show Hide Component</Text>
      <View style={styles.buttonContainer}>
        <Button title={show ? 'Hide' : 'Show'} onPress={() => setShow(!show)} />
      </View>
      
      {show && <Grid />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'black',
    textAlign:'center'
  },
  buttonContainer: {
    marginBottom: 20,
  },
});

export default ShowHide;
