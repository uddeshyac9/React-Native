import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Button, Alert, Modal} from 'react-native';
import UserModal from './UserModal';

function Users({navigation}) {
  const [data, setData] = useState([]);
  const apiurl = 'http://192.168.1.20:3000/users';
  const [selectedUser, setSelectedUser] = useState([])
  // const apiurl = "http://10.0.2.2:3000/users"; not working
  const [showModal,setShowModal] = useState(false)

  
  const fetchUsers = async () => {
    try {
      const response = await fetch(apiurl);

      if (!response.ok) {
        console.error(
          'Error fetching data:',
          response.status,
          response.statusText,
        );
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
  const deleteUser = async (id) => {
    try {
      let result = await fetch(`${apiurl}/${id}`, {
        method: "delete"
      });
  
      if (result.ok) {
        console.log("User deleted successfully");
        Alert.alert("User Deleted Successfully");
        fetchUsers();
      } else {
        console.log("User deletion failed. Server responded with:", result.status, result.statusText);
        Alert.alert("User Deletion Failed");
      }
    } catch (error) {
      console.error("Error deleting user:", error.message);
      Alert.alert("Error Deleting User");
    }
  };
  const updateModal = (item) => {
    setShowModal(true) 
    setSelectedUser(item)
    
  }
  useEffect(() => {
  
    // Fetch and set data when the component mounts
    fetchUsers();

    // Add a focus event listener to refresh data when the tab is focused
    const unsubscribe = navigation.addListener('focus', () => {
      fetchUsers();
    });
    // Cleanup the listener when the component is unmounted
    return unsubscribe;
  }, [navigation]);


  return (
    <ScrollView>
      {data.length > 0
        ? data.map(item => (
            <View key={item.id} style={styles.userContainer}>
              <Text style={styles.userInfo}>{`Name: ${item.fullname}`}</Text>
              <Text
                style={styles.userInfo}>{`Username: ${item.username}`}</Text>
              <Text style={styles.userInfo}>{`Age: ${item.age}`}</Text>
              <Text style={styles.userInfo}>{`Email: ${item.email}`}</Text>
              <View style={styles.btnContainer}>
                <View style={styles.buttonWrapper}>
                  <Button title="Update" onPress={() => updateModal(item)}/>
                </View>
                <View style={styles.buttonWrapper}>
                  <Button color={'red'} title="Delete" onPress={() => deleteUser(item.id)}/>
                </View>
              </View>
            </View>
          ))
        : null}
        <Modal visible={showModal} transparent={true}>
      <UserModal  setShowModal={setShowModal} selectedUser={selectedUser} fetchUsers={fetchUsers}/>
      </Modal>
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
    backgroundColor: 'lightblue',
    flex: 1,
    gap: 2,
    alignItems: 'center',
  },
  userInfo: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
    
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 8,  // Adjust as needed
  },

  
});

export default Users;
