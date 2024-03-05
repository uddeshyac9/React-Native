import React from 'react'
import { View,Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { useDispatch } from 'react-redux';
import { remove } from '../redux/features/CartSlice';
import Toast from 'react-native-toast-message';


function CartItem({item}) {
    const Dispatch = useDispatch()
    const removeFromCart = () => {
      Dispatch(remove(item.id))
      Toast.show({
        type: 'info',
        text1: 'Item Remove From Cart',
        
      });
    }
    return (
        <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: item.image }} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description.split(" ").slice(0, 15).join(" ") + "..."}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{item.price}</Text>
            <TouchableOpacity onPress={() => removeFromCart()}>
              <View style={styles.deleteButton}>
                <Text>Remove Item</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  

 

export default CartItem

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 2,
      borderBottomColor: 'gray',
    },
    imageContainer: {
      width: '30%',
    },
    image: {
      width: '100%',
      height: 100,
      resizeMode: 'contain',
    },
    textContainer: {
      marginLeft: 10,
      flex: 1,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#374151',
    },
    description: {
      fontSize: 16,
      color: '#6B7280',
    },
    priceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    price: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#10B981',
    },
    deleteButton: {
      backgroundColor: '#F87171',
      padding: 10,
      borderRadius: 20,
    },
    deleteIcon: {
      color: 'white',
    },
  });

