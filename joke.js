import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ViewPagerAndroid
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';



export default class joke extends Component<{}> {
  render() {
    return (
      <ViewPagerAndroid style={{flex: 1}}
         initialPage={0}>
        
        <View style={{flex: 1, flexDirection: 'row'}} >
        
           <TouchableOpacity onPress={ () => Actions.three() } style={styles.button}>
              <View  style={styles.container2} key="1">
               <Text >
                 Touch me
                </Text>
              </View>
            </TouchableOpacity>
        
        <View style={{width: 100, height: 50, backgroundColor: 'powderblue'}} />
       
        </View>
        <View style={{flex: 1, flexDirection: 'row'}} key="2" >
        <View style={{width: 100, height: 50, backgroundColor: 'powderblue'}} />
       
        </View>
      </ViewPagerAndroid>
    );
  }
}

const styles = StyleSheet.create({
  
  button:{
    backgroundColor:'red',
    borderWidth: 1,
    width: "100%",
    height: 50,
    alignItems: 'center'
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});