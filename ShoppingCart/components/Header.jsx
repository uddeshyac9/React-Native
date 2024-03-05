import React, { useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import logo from '../assets/logo.png';
import cart from '../assets/cart.png';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';

function Header() {
  const navigation = useNavigation();
  const cartItems = useSelector((state) => state.cart);

  const goToHome = () => {
    navigation.navigate('Home');
  };

  const goToCart = () => {
    navigation.navigate('Shopping Cart');
  };


  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.img} />
      <TouchableOpacity onPress={goToHome} style={[styles.button, styles.homeButton]}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToCart} style={[styles.button, styles.cartButton]}>
        <Image source={cart} style={styles.cartImg} />
        {cartItems.length > 0 && (
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>{cartItems.length}</Text>
          </View>
        )}
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
    paddingVertical: 10,
  },
  img: {
    width: 160,
    height: 50,
  },
  cartImg: {
    width: 40,
    height: 40,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  button: {
    padding: 5,
    borderRadius: 5,
  },
  homeButton: {
    backgroundColor: 'blue',
  },
  cartButton: {
    backgroundColor: 'transparent',
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: 5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
