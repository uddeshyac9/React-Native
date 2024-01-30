import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';

function PlatformComp() {
  return (
    <View style={styles.container}>
      <Text style={styles.platformText}>Platform: {Platform.OS}</Text>
      {Platform.OS === 'ios' ? (
        <View style={[styles.platformView, { backgroundColor: 'red' }]}></View>
      ) : (
        <View style={[styles.platformView, { backgroundColor: 'green' }]}></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  platformText: {
    fontSize: 40,
    textAlign: 'center',
  },
  platformView: {
    width: 100,
    height: 100,
    marginTop: 20,
    borderRadius: 10,
   
  },
});

export default PlatformComp;

