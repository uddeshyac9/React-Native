import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button} from 'react-native';
import { add, remove } from '../redux/features/CartSlice';

const Product = ({ item }) => {
 const cart = useSelector((state) => state.cart || [])
  const Dispatch = useDispatch()

  const addToCart = (item) => {
     Dispatch(add(item))
     console.warn('Item added in Cart')
     console.log(item);
  }
  const removeFromCart = () => {
    Dispatch(remove(item.id))
  }
  



  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View>
        <Text style={styles.description}>
          {item.description.split(' ').slice(0, 15).join(' ') + '...'}
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>

      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.price}>${item.price}</Text>
          
        </View>

        <View>
        <Button title='Add to Cart' onPress={() => addToCart(item)} />


        </View>
        </View> 

 
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
    alignSelf:'center',
    textAlign:'center',
    marginBottom:15
  },
  imageContainer: {
    height: 180,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain', // Use 'contain' for fitting inside the container
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

