import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import { Button } from 'react-native-elements';
import MainStackNavigator from '../navigator/MainStackNavigator'

export default class APP extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    
  }

  componentWillUnmount() {
    
  }

  render() {
    return (
      <MainStackNavigator/>
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
