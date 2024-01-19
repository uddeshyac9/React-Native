import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import FlatListComp from './FlatListComp';
function FlatListUser() {
  const users = [
    {
      id: 1,
      username: 'john_doe',
      email: 'john.doe@example.com',
      age: 25,
    },
    {
      id: 2,
      username: 'jane_smith',
      email: 'jane.smith@example.com',
      age: 30,
    },
    {
      id: 3,
      username: 'alice_jones',
      email: 'alice.jones@example.com',
      age: 22,
    },
    {
      id: 4,
      username: 'bob_williams',
      email: 'bob.williams@example.com',
      age: 28,
    },
    {
      id: 5,
      username: 'emma_davis',
      email: 'emma.davis@example.com',
      age: 32,
    },  {
      id: 6,
      username: 'charlie_brown',
      email: 'charlie.brown@example.com',
      age: 26,
    },
    {
      id: 7,
      username: 'olivia_smith',
      email: 'olivia.smith@example.com',
      age: 35,
    },
    {
      id: 8,
      username: 'samuel_jackson',
      email: 'samuel.jackson@example.com',
      age: 40,
    },
    {
      id: 9,
      username: 'grace_hall',
      email: 'grace.hall@example.com',
      age: 29,
    },
    {
      id: 10,
      username: 'alex_turner',
      email: 'alex.turner@example.com',
      age: 31,
    },
    // Add more users as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>List with Flat List Components:</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View >
         <FlatListComp item={item}/>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'black'
  },
  
});

export default FlatListUser;
