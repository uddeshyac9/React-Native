import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <Text style={styles.btn}>Tap ME</Text>
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
    backgroundColor: 'blue', // Set a background color for visibility
  },
  btn : {
    fontSize: 30,
    backgroundColor: '#BB1CD9',
    paddingVertical:10,
    paddingHorizontal: 40,
    color: '#FFFFFF',
    borderRadius: 15,
    textTransform: 'uppercase'
  }
});

