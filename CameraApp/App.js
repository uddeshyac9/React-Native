import React, { useState } from 'react';
import { RNCamera } from 'react-native-camera';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button
} from 'react-native';

function App() {
  const [image, setImage] = useState(null);

  const takePicture = async (camera) => {
    try {
      const options = { quality: 0.9, base64: false };
      const data = await camera.takePictureAsync(options);
      setImage(data.uri);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <View style={styles.container}>
      {image ? (
        <View style={styles.preview}>
          <Text>Here is your Picture</Text>
          <Image style={styles.img} source={{uri:image,width:'100%',height:'80%'}}></Image>
          <Button title='Click Again' onPress={() => setImage(null)}/>
           </View>
      ) : (
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Camera Permission',
            message: 'App needs access to your camera',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          }}
          androidAudioPermissionOptions={{
            title: 'Audio Permission',
            message: 'App needs access to your audio',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          }}
          captureAudio={false}>
          {({ camera, status }) => {
            if (status !== 'READY') {
              return <ActivityIndicator size="large" color="#ffffff" />;
            }
            return (
              <View style={styles.snapButtonContainer}>
              <TouchableOpacity
                style={styles.snapButton}
                onPress={() => takePicture(camera)}>
                <Text style={styles.snapButtonText}>Snap</Text>
              </TouchableOpacity>
            </View>
            
          
            );
          }}
        </RNCamera>
      )}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A79DF',
  },
  preview: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  }, 
    snapButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  snapButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
  },
  snapButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  }, img : {
    width:300,
    height:300,
    borderRadius:150,
    
  }
});
