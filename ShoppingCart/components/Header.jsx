import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import logo from '../assets/logo.png';
import cart from '../assets/cart.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Header() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.img} />
      <TouchableOpacity>
        <Text style={styles.home}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
       <Image source={cart} style={styles.cartImg} />
      </TouchableOpacity>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#333',
    height: 55,
   paddingVertical:10 // Added padding to avoid icon clipping
  },
  img: {
    width: 160,
    height: 50,
  },
  cartImg: {
   width:40,
   height:40,
  },
  home: {
    fontSize: 18,
    color: 'white', // Added text color for visibility
  },
});
