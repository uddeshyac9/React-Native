import React, { useEffect, useState } from 'react'
import { ScrollView, View,Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useSelector, useDispatch} from 'react-redux'
import CartItem from './CartItem'
import { useNavigation  } from '@react-navigation/native';

function Cart() {
    const cart = useSelector((state) => state.cart)
    const [totalAmount, setTotalAmount] =useState(0)
    useEffect(()=> {
      setTotalAmount(cart.reduce((acc,curr) => acc + curr.price,0))
    },[cart])
    const Navigation = useNavigation()
    return (
      <ScrollView>
        <View>
          {
            cart.length > 0 ? (<View> 
              {
                cart.map((item,index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index}></CartItem>
                })
              }
                  <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Cart</Text>
        <Text style={styles.summaryText}>Summary</Text>
        <Text style={styles.totalItemsText}>Total Items: {cart.length}</Text>
      </View>

      <View style={styles.footer}>
      <Text style={styles.totalAmountText}>Total Amount: ${totalAmount.toFixed(2)}</Text>

        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>CheckOut Now</Text>
        </TouchableOpacity>
      </View>
    </View>
            </View>) : (
   <View style={styles.emptyCartContainer}>
   <Text style={styles.emptyCartText}>Your Cart is Empty</Text>
   <TouchableOpacity style={styles.shopNowButton} onPress={() => Navigation.navigate('Home')}>
     <Text style={styles.shopNowText}>Shop Now</Text>
   </TouchableOpacity>
 </View>
 
            )
          }    
        </View>

      </ScrollView>
        
    )
}

export default Cart

const styles =  StyleSheet.create({
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  emptyCartText: {
    fontSize: 25,
    marginBottom: 10,
    color: 'black',
    fontStyle:'italic'
  },
  shopNowButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  shopNowText: {
    color: 'white',
    fontSize: 16,
  }, container: {
    width: '100%',
    flexDirection: 'column',
    marginTop: 5,
  },
  header: {
    flexDirection: 'column',
    padding: 5,
    marginVertical: 14,
    justifyContent: 'space-between',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#008000',
  },
  summaryText: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#006700',
    marginTop: -5,
  },
  totalItemsText: {
    fontSize: 20,
    color: '#707070',
  },
  footer: {
    flexDirection: 'column',
    padding: 5,
    justifyContent: 'space-between',
  },
  totalAmountText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#707070',
  },
  checkoutButton: {
    backgroundColor: '#008000',
    borderRadius: 10,
    marginTop: 5,
    borderColor: '#006700',
    borderWidth: 2,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },

})