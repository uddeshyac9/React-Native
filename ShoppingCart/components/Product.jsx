import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Product = ({ post, cart, addToCart, removeFromCart }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{post.title}</Text>
      </View>
      <View>
        <Text style={styles.description}>
          {post.description.split(' ').slice(0, 15).join(' ') + '...'}
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: post.image }} style={styles.image} />
      </View>

      {/* <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.price}>${post.price}</Text>
        </View>
        {cart.some((cartItem) => cartItem.id === post.id) ? (
          <TouchableOpacity
            style={styles.cartButton}
            onPress={removeFromCart}>
            <Text style={styles.cartButtonText}>Remove Item</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.cartButton}
            onPress={addToCart}>
            <Text style={styles.cartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        )}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
    marginVertical: 10,
    marginLeft: 5,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    elevation: 5,
  },
  title: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    color: '#666',
    fontSize: 12,
    width: 180,
  },
  imageContainer: {
    height: 180,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 5,
  },
  price: {
    color: 'green',
    fontWeight: 'bold',
  },
  cartButton: {
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  cartButtonText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 12,
    textTransform: 'uppercase',
  },
});

export default Product;

