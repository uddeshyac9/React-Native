import React from 'react'
import { View, Text } from 'react-native';

function Header() {
    return (
        <View style={{ backgroundColor: 'blue', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 20 }}>Welcome to our App</Text>
      </View>
        
    )
}

export default Header;
