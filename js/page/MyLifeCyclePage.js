import React, { Component } from 'react';

import { Button } from 'react-native-elements';

export default class MyLifeCyclePage extends Component {

  componentDidMount() {
    this.props.navigation.setParams({
      onActive:this.onActive,
      onInactive:this.onInactive
    })
  }

  componentWillUnmount() {

  }

  onActive(){
    console.log('onActive')
  }

  onInactive(){
    console.log('onInactive')
  }
}
