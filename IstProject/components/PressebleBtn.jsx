import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

function PressableBtn() {
  return (
    <View style={styles.container}>
      <Pressable
        // onPress={() => console.warn('Normal onPress')}
        delayLongPress={1000}
        onLongPress={() => console.warn('Long press')}
        onPressIn={() => console.warn('Press In')}
        onPressOut={() => console.warn('Press Out')}
      >
        <Text style={styles.pressableBtn}>Pressable</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressableBtn: {
    backgroundColor: 'blue',
    color: '#fff',
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
  },
});

export default PressableBtn;

