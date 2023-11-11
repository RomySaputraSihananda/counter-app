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

interface State {
  count: number;
}

interface Props {}
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  setCount = (newCount: number) => {
    this.setState({count: newCount});
  };

  render(): React.ReactNode {
    return (
      <View style={styles.body}>
        <Text style={styles.heading}>Counter App</Text>
        <Text style={styles.plainText}>{this.state.count}</Text>
        <View style={styles.container}>
          <Pressable
            style={styles.button}
            onPress={() =>
              this.setCount(
                this.state.count === 0
                  ? this.state.count
                  : this.state.count - 1,
              )
            }>
            <Text style={styles.textButton}>-</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => this.setCount(0)}>
            <Text style={styles.textButton}>reset !</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => this.setCount(this.state.count + 1)}>
            <Text style={styles.textButton}>+</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

export default App;
