import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Grid() {
 let timer = setInterval(() => {
    console.warn('Timer Called')
  }, 2000);
  useEffect(() => {
   return () => clearInterval(timer)
  })
  const users = [
    { id: 1, username: 'john_doe' },
    { id: 2, username: 'jane_smith' },
    { id: 3, username: 'alice_jones' },
    { id: 4, username: 'bob_williams' },
    { id: 5, username: 'emma_davis' },
    { id: 6, username: 'charlie_brown' },
    { id: 7, username: 'olivia_smith' },
    { id: 8, username: 'samuel_jack' },
    { id: 9, username: 'grace_hall' },
    { id: 10, username: 'alex_turner' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Grid with Dynamic Data</Text>
      <View style={styles.gridContainer}>
        {users.map((user) => (
          <View key={user.id} style={styles.gridItem}>
            <Text>{user.username}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2f2f2f',

  },
  header: {
    fontSize: 31,
    marginBottom: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    
  },
  gridItem: {
    width: '40%', // Adjust as needed based on the desired number of columns
    backgroundColor: "blue",
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
  },
});

export default Grid;

