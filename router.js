import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
	Scene,
  Router,
  Actions,
  Stack,
} from 'react-native-router-flux';
import App from './App.js'
import joke from './joke.js'
import lunar from './lunar.js'
export default class router extends Component{

	render(){
		return(
			<Router>
				<Stack key="root">
					<Scene key="first" component={App} title="Homepage"/>
					<Scene key="joke" component={joke} title="cyclone"/>
					<Scene key="three" component={lunar} title="lunar"/>
				</Stack>
			</Router>
			)
	}
}