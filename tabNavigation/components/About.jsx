import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black'
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    color:'white'
  },
});

export default About;
