import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import { Button } from 'react-native-elements';
import MyLifeCyclePage from './MyLifeCyclePage'

export default class Tab2 extends MyLifeCyclePage {

  onActive(){
    console.log('Tab2: 开')
  }
  onInactive(){
    console.log('Tab2: 关')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          icon={{name: 'home', size: 32}}
          buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
          textStyle={{textAlign: 'center'}}
          title={'Tab2'}
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
