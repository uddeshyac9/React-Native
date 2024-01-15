import React, { useState } from 'react'
import { View , Text, Button} from 'react-native'
import Header from './components/Header.jsx';
import Props from './components/Props.jsx';

function App() {
  function fruit( ) {
    return 'Apple';
  }
  function hello(){
    setName('Hello My name is Uddeshya')
    // console.log(val);
    // console.warn(val)
  }


  const [name , setName] = useState('Uddeshya');
  const [learning, setLearning] = useState('React Native')
  let age = 23;
  let data = {
    learning: learning,
    setLearning,
    age: age
  }

 
  // let name = "Uddeshya"
  return (
    <View>
      <Header/>
      <Text style={{fontSize : 30}}>{name}</Text>
      <Text>hello my favrite fruit is {fruit()}</Text>
      <Button  title='Click here' color={'red'} onPress={()=> hello()}></Button>
      <Props data={data}/>
    </View>
  )
}

export default App



