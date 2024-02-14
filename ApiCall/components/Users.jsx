import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function Users( {navigation}) {
  const [data, setData] = useState([]);
  const apiurl = "http://192.168.1.20:3000/users";
  // const apiurl = "http://10.0.0.2:3000/users";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(apiurl);

        if (!response.ok) {
          console.error('Error fetching data:', response.status, response.statusText);
          return;
        }

        const result = await response.json();

        if (result) {
          setData(result);
         
        }

      } catch (error) {
        console.error('Error while fetching data:', error);
        console.warn('Data is Not Fetched');
      }
    };
// Fetch and set data when the component mounts
    fetchUsers();

     // Add a focus event listener to refresh data when the tab is focused
    const unsubscribe = navigation.addListener('focus', () => {
      fetchUsers();
    })
     // Cleanup the listener when the component is unmounted
     return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView>
      {data.length > 0
        ? data.map((item) => (
            <View key={item.id} style={styles.userContainer}>
              <Text style={styles.userInfo}>{`Name: ${item.fullName}`}</Text>
              <Text style={styles.userInfo}>{`Username: ${item.username}`}</Text>
              <Text style={styles.userInfo}>{`Age: ${item.age}`}</Text>
              <Text style={styles.userInfo}>{`Email: ${item.email}`}</Text>
            </View>
          ))
        : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#2f2f2f',
    borderRadius: 8,
  },
  userInfo: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
});

export default Users;
