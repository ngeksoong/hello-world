/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! 123
        </Text>
        
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}

        </Text>
        <TouchableOpacity onPress={ () => Actions.joke() } style={styles.button}>
          <View  style={styles.container2}>
           <Text >
             Touch me
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 60,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
  },
  button:{
    backgroundColor:'green',
    borderWidth: 1,
    width: "50%",
    height: 100,
    alignItems: 'center',
    marginBottom: 20
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
