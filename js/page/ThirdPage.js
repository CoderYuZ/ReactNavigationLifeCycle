import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import { Button } from 'react-native-elements';
import MyLifeCyclePage from './MyLifeCyclePage'

export default class ThirdPage extends MyLifeCyclePage {

  onActive(){
    console.log('ThirdPage: 开')
  }
  onInactive(){
    console.log('ThirdPage: 关')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          icon={{name: 'home', size: 32}}
          buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
          textStyle={{textAlign: 'center'}}
          title={'ThirdPage'}
          onPress={()=>{
             
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
