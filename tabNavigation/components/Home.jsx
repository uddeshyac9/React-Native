import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({ navigation}) => {
  // const {username} = route.params;
  // console.warn(username)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Text style={styles.text}>Username:</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
      <View style={styles.buttonSpace} />
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
  },
  buttonSpace: {
    marginVertical: 10, // You can adjust the space by changing the margin value
  },
  logoutButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Home;
