import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ViewPagerAndroid,
  TextInput

} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';



export default class joke extends Component<{}> {
  
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }


  render() {
    return (

      <View style={{flex: 1, flexDirection: 'column'}}>
        
          <View style={{width: "100%", height: "50%", backgroundColor: 'powderblue'}} >
            <View style={{padding: 10}}>
              <TextInput
                style={{height: 40}}
                placeholder="Type here to translate!"
                onChangeText={(text) => this.setState({text})}/>
            <View style={{padding: 10, backgroundColor:'black'}}/>
          </View>
          
        </View>
        <View style={{width: "100%", height: "25%", backgroundColor: 'skyblue'}} >
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
        </View>
        <View style={{width: "100%", height: "25%", backgroundColor: 'steelblue'}} />
        
      </View>
    );
  }
}

