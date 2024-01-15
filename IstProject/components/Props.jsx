import React from 'react'
import { View, Text,Button } from 'react-native'

const Props =({ data }) =>  {
    // age = data.age; // Remove the double slashes if this line is intended to be used
      let  setLearning = data.setLearning;
    return (
      <View>
        <Text>My age is {data.age}</Text>
        <Text>Currently I am learning {data.learning}</Text>
        <Button title="Update" onPress={() => setLearning('Props in ReactNative') }></Button>
      </View>
    );
  }
  
  export default Props;
  
