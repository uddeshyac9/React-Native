import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Product from './Product.jsx';
function Home() {
    const API_URL = "https://fakestoreapi.com/products";
    const [products,setProducts] = useState([])
    const [loading, setLoading] =useState(false)
    const fetchProductData = async() => {
        setLoading(true)
     try {
        const response = await fetch(API_URL)
        if (!response.ok) {
            console.error(
              'Error fetching data:',
              response.status,
              response.statusText,
            );
            return;
          }
        const result = await response.json();
        if(result) {
            setProducts(result)
        }
        setLoading(false)
     } catch (error) {
        console.error('Error while fetching data:', error);
        console.warn('Data is Not Fetched');
        setProducts([])
     }
    }

    useEffect(() => {
        // Call the function here
        fetchProductData();
      }, []); 

    return (
        <ScrollView>
            {
                loading ?  <Spinner visible={loading} textContent={'Loading...'}  /> 
                 : products.map((item) => {
                    return <View key={item.id}> 
                    <Product post={item}/>
                    </View>
                 })  
            }

        </ScrollView>
        
    )
}

export default Home
