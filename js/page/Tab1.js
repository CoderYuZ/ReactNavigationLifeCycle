import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import { Button } from 'react-native-elements';
import MyLifeCyclePage from './MyLifeCyclePage'

export default class Tab1 extends MyLifeCyclePage {
  onActive(){
    console.log('Tab1: 开')
  }
  onInactive(){
    console.log('Tab1: 关')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          icon={{name: 'home', size: 32}}
          buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
          textStyle={{textAlign: 'center'}}
          title={'Tab1'}
          onPress={()=>{
             this.props.screenProps.stackNavigation.navigate('FirstPage')
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'pink',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
