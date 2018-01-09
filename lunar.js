import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ViewPagerAndroid
} from 'react-native';

export default class lunar extends Component<{}> {
  render() {
    return (

      
	    <ViewPagerAndroid
	     	 style={styles.viewPager}
	     	 initialPage={0}>
	      <View style={styles.pageStyle} key="1">
	      <View style={{width: 100, height: 50, backgroundColor: 'powderblue'}} >
	        <Text>First page</Text>
	        </View>
	      </View>
	      <View style={styles.pageStyle} key="2">
	      <View style={{width: 100, height: 50, backgroundColor: 'skyblue'}} >
	        <Text>Second page</Text>
	        </View>
	      </View>
	    </ViewPagerAndroid>
      
      
    );
  }
}

var styles = {
  
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  }
}
