import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Snackbar from 'react-native-snackbar';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('0');

  const currencyPerRupee = {
    DOLLAR: 0.012,
    EURO: 0.012,
    POUND: 0.93,
    RUBEL: 0.93,
    AUSDOLLAR: 0.2,
    CANDOLLAR: 0.019,
    YEN: 1.54,
    DINAR: 0.0043,
    XAU: 0.00000597,
  };

  const convertCurrency = (currency) => {
    if (!inputValue.trim()) {
      setResultValue('0')
      Snackbar.show({
        text: 'Please Enter Value',
        backgroundColor: '#EA7773',
        textColor: '#FFF',
      });
    } else {
      const result = parseFloat(inputValue) * currencyPerRupee[currency];
      setResultValue(result.toFixed(2));
    }
  };

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps='handled'
      contentInsetAdjustmentBehavior='automatic'>
      <SafeAreaView>
        <Text style={styles.header}>Currency Converter</Text>
        <View style={styles.resultContainer}>
          <Text style={styles.resultValue}>{resultValue}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType='numeric'
            placeholder='Enter INR'
            onChangeText={(inputVal) => setInputValue(inputVal)}
            style={styles.input}
          />
        </View>
        <View style={styles.convertButtonContainer}>
          {Object.keys(currencyPerRupee).map((currency) => (
            <TouchableOpacity
              key={currency}
              style={styles.ButtonConverter}
              onPress={() => convertCurrency(currency)}>
              <Text style={styles.Button}>{currency}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#bbe1fa',
    alignSelf: 'center',
    marginBottom: 20,
  },
  resultContainer: {
    height: 70,
    marginTop: 20,
    justifyContent: 'center',
    borderColor: '#bbe1fa',
    borderWidth: 2,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  resultValue: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold',
  },
  inputContainer: {
    height: 70,
    justifyContent: 'center',
    borderColor: '#bbe1fa',
    borderWidth: 2,
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  input: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  convertButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  ButtonConverter: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '30%',
    borderWidth: 2,
    borderColor: '#bbe1fa',
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#0f4c75',
  },
  Button: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
