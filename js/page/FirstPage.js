import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import { Button } from 'react-native-elements';
import MyLifeCyclePage from './MyLifeCyclePage'

export default class FirstPage extends MyLifeCyclePage {

  onActive(){
    console.log('FirstPage: 开')
  }
  onInactive(){
    console.log('FirstPage: 关')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          icon={{name: 'home', size: 32}}
          buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
          textStyle={{textAlign: 'center'}}
          title={'FirstPage'}
          onPress={()=>{
             this.props.navigation.navigate('SecondPage')
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
