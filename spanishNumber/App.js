import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Sound from 'react-native-sound';

const soundlist = [
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav'),
];

function App() {
  useEffect(() => {
    Sound.setCategory('Playback');
  }, []);

  const playSound = (sound) => {
    try {
      const soundVar = new Sound(sound, (error) => {
        if (error) {
          console.log('Error loading sound:', error);
        } else {
          soundVar.play((success) => {
            if (success) {
              console.log('Successfully finished playing');
            } else {
              console.log('Playback failed due to audio decoding errors');
            }
            soundVar.release();
          });
        }
      });
    } catch (e) {
      console.log('Error creating Sound object:', e);
    }
  };

  const renderSoundButtons = () => {
    return soundlist.map((sound, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => playSound(sound)}
        style={styles.box}>
        <Text style={styles.text}>{`${index + 1}`}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo.png')} />
      <View style={styles.gridContainer}>{renderSoundButtons()}</View>
    </ScrollView>
  );
}

export default App;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 30,
  },
  gridContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 5,
    marginBottom: 40,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  box: {
    width: '45%',
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
    backgroundColor: '#0f4c75',
    borderRadius: 5,
    shadowColor: '#393e46',
    elevation: 5,
  },
  text: {
    fontSize: 50,
    color: '#ff4301',
  },
});


 
