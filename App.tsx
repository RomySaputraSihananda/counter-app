/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    backgroundColor: '#333',
    height: '100%',
    width: '100%',
    fontFamily: 'Quote',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#eaeaea',
    alignSelf: 'center',
    borderRadius: 3,
    margin: 10,
  },
  textButton: {
    color: '#333',
    paddingVertical: 16,
    paddingHorizontal: 32,
    fontSize: 30,
    fontFamily: 'Quote',
  },
  plainText: {
    alignSelf: 'center',
    color: '#eaeaea',
    fontFamily: 'Quote',
    fontSize: 80,
    padding: 30,
  },
  heading: {
    alignSelf: 'center',
    color: '#eaeaea',
    fontFamily: 'Quote',
    fontSize: 60,
    marginBottom: 40,
  },
});

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.body}>
      <Text style={styles.heading}>Counter App</Text>
      <Text style={styles.plainText}>{count}</Text>
      <View style={styles.container}>
        <Pressable
          style={styles.button}
          onPress={() => setCount(count === 0 ? count : count - 1)}>
          <Text style={styles.textButton}>-</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setCount(0)}>
          <Text style={styles.textButton}>reset !</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setCount(count + 1)}>
          <Text style={styles.textButton}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default App;
