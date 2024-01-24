import React, { useState } from 'react';
import { View, Text, TouchableOpacity,Button, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import dice1 from './assets/dice1.png';
import dice2 from './assets/dice2.png';
import dice3 from './assets/dice3.png';
import dice4 from './assets/dice4.png';
import dice5 from './assets/dice5.png';
import dice6 from './assets/dice6.png';

function App() {
  const [dice, setDice] = useState(dice1);
  const [diceTwo, setDiceTwo] = useState(dice6);
  const rollDice = () => {
    playButton();
    playButtonTwo();
  }

  const playButton = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDice(dice1);
        break;
      case 2:
        setDice(dice2);
        break;
      case 3:
        setDice(dice3);
        break;
      case 4:
        setDice(dice4);
        break;
      case 5:
        setDice(dice5);
        break;
      case 6:
        setDice(dice6);
        break;
      default:
        setDice(dice1);
        break;
    }
  };

  const playButtonTwo = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceTwo(dice1);
        break;
      case 2:
        setDiceTwo(dice2);
        break;
      case 3:
        setDiceTwo(dice3);
        break;
      case 4:
        setDiceTwo(dice4);
        break;
      case 5:
        setDiceTwo(dice5);
        break;
      case 6:
        setDiceTwo(dice6);
        break;
      default:
        setDiceTwo(dice6);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={playButton}>
        <Image source={dice} style={styles.Img} />
      </TouchableWithoutFeedback>
      <Button title='Roll Dice' onPress={rollDice}></Button>
      <TouchableWithoutFeedback onPress={playButtonTwo}>
        <Image source={diceTwo} style={styles.Img} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#222831',
  },
  Img: {
    width: '40%',
    height: '20%',
  },
});

export default App;
