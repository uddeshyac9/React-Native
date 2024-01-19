import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet,TouchableOpacity, StatusBar, } from 'react-native';

function App() {
  const [randomColor, SetRandomColor] = useState('blue')
  function getRandomColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return SetRandomColor(randomColor);
  } 
    const resetBg = () => {
      SetRandomColor('#2F2F2F')
    }
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar backgroundColor={randomColor}/>
      <View style={[styles.container, {backgroundColor: randomColor}]}>
      <TouchableOpacity onPress={getRandomColor}>
          <Text style={styles.btn}>Tap ME</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={resetBg}>
          <Text style={styles.btn}>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
                      // Set a background color for visibility
  },
  btn : {
    fontSize: 30,
    backgroundColor: '#BB1CD9',
    paddingVertical:10,
    paddingHorizontal: 40,
    marginTop: 10,
    color: '#FFFFFF',
    borderRadius: 15,
    textTransform: 'uppercase'
  }
});

