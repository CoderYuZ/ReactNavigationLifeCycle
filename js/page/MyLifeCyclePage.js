import React, { Component } from 'react';

import { Button } from 'react-native-elements';

export default class MyLifeCyclePage extends Component {

  componentDidMount() {
    this.props.navigation.setParams({
      onActive:this.onActive.bind(this),
      onInactive:this.onInactive.bind(this)
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
