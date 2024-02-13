// JokesList.jsx

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const JokesList = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?amount=10');
        const data = await response.json();

        if (!data.error) {
          setJokes(data.jokes);
        } else {
          console.error('Error fetching jokes:', data.error);
        }
      } catch (error) {
        console.error('Error fetching jokes:', error.message);
      }
    };

    fetchData();
  }, []);

  const renderJokeItem = ({ item }) => (
    <View style={styles.jokeItem}>
      <Text style={styles.jokeText}>{item.category}</Text>
      {item.type === 'twopart' ? (
        <>
          <Text style={styles.jokeText}>{item.setup}</Text>
          <Text style={styles.jokeText}>{item.delivery}</Text>
        </>
      ) : (
        <Text style={styles.jokeText}>{item.joke}</Text>
      )}
    </View>
  );
  
  

  return (
    <FlatList
      data={jokes}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderJokeItem}
    />
  );
};

const styles = StyleSheet.create({
  jokeItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  jokeText: {
    color: 'black',
  },
});


export default JokesList;

