import React, { useState } from 'react'
import { View , Text, Button,ScrollView, StatusBar} from 'react-native'
import Header from './components/Header.jsx';
import Props from './components/Props.jsx';
import InputText from './components/InputText.jsx';
import SimpleForm from './components/SimpleForm.jsx';
import FlatListUser from './components/FlatListUser.jsx';
import ListMapFunc from './components/ListMapFunc.jsx';
import Grid from './components/Grid.jsx';
import Sectionlist from './components/Sectionlist.jsx';
import Hooks from './components/Hooks.jsx';
import ShowHide from './components/ShowHide.jsx';
import Flex from './components/Flex.jsx';
import MyRadioButton from './components/MyRadioButton.jsx';
import Loader from './components/Loader.jsx';

import OpenModal from './components/Modal.jsx';
import PressebleBtn from './components/PressebleBtn.jsx';
import StatusBarChange from './components/StatusBarChange.jsx';
import PlatformComp from './components/PlatformComp.jsx';

import WebViewComp from './components/WebViewComp.jsx';
import UseRef from './components/UseRef.jsx';
import Async_Storage from './components/Async_Storage.jsx';
function App() {
 
  function hello(){
    setName('Hello My name is Uddeshya')
    // console.log(val);
    // console.warn(val)
  }

  const [name , setName] = useState('');
  const [learning, setLearning] = useState('React Native')
  let age = 23;
  let data = {
    learning: learning,
    setLearning,
    age: age
  }

 
  // let name = "Uddeshya"
  return (
    // <WebViewComp/>
    <ScrollView style={{ flex:1}}>
      
      <Header/>
     
      {/* <Text style={{fontSize : 30}}>{name}</Text> */}
      
      {/* <Button  title='Click here' color={'red'} onPress={hello}></Button> */}
    
      {/* <Props data={data}/> */}
      {/* <InputText/> */}
      {/* <SimpleForm/> */}
        {/* <FlatListUser/> */}
      {/* <ListMapFunc/>  */}
      {/* <Grid/> */}
      {/* <Sectionlist/> */}
      {/* <Hooks/> */}
      {/* <ShowHide/> */}
      {/* <Flex/> */}
      {/* <MyRadioButton/> */}
      {/* <Loader/> */}
     {/* <OpenModal/> */}
      { /* <PressebleBtn/> */}
    {/* <StatusBarChange/> */}
    {/* <PlatformComp/> */}
    {/* <UseRef/> */}
    <Async_Storage/>
    
            </ScrollView>
  )
}

export default App



