import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

function SearchUser() {
  const [data, setData] = useState([]);

  const searchUser = async (text) => {
    try {
      const url = `http://192.168.1.20:3000/users?age=${text}`;
      let result = await fetch(url);
    //   console.warn(url)

      if (result.ok) {
        let data = await result.json();
        setData(data);
        // console.warn(data)
      } else {
        console.error('Failed to fetch data. Server responded with:', result.status, result.statusText);
        console.log('Response body:', await result.text());
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <View style={{ flex: 1 }}>

      <TextInput
        style={{ borderColor: 'skyblue', borderWidth: 1, margin: 15, fontSize: 20, color: 'black' }}
        placeholder={'Search By Age'}
        onChangeText={(text) => searchUser(text)}
        placeholderTextColor="grey"
      />
      {data.length > 0 ? (
        data.map((item) => (
          <View key={item.id}>
            <Text style={{ color: 'black' }}>FullName:{item.fullname}</Text>
            <Text style={{ color: 'black' }}>Username:{item.username}</Text>
            <Text style={{ color: 'black' }}>Email:{item.email}</Text>
            <Text style={{ color: 'black' }}> Age: {item.age}</Text>
          </View>
        ))
      ) : null}
    </View>
  );
}

export default SearchUser;

