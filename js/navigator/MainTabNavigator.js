import React, {Component} from 'react';
import {
   StyleSheet,
   View,
   Text,
   Image,
   DeviceEventEmitter
 } from 'react-native';
import { TabNavigator } from "react-navigation";
import MyLifeCyclePage from '../page/MyLifeCyclePage'

const MyTabNavigator = TabNavigator(
   {
     Tab1: {
       screen: require('../page/Tab1').default,
     },

     Tab2: {
       getScreen: () => require('../page/Tab2').default,
     },

     Tab3: {
       getScreen: () => require('../page/Tab3').default,
     }
   },
   {
     lazy: true,
   }
);

export default class MainTabNavigator extends MyLifeCyclePage {

  onActive(){
    if (this.tabNavigatorState && !this.isCurrentActive) {
      let tabNavigatorStatePatams = this.tabNavigatorState.routes[this.tabNavigatorState.index].params
      if (tabNavigatorStatePatams) {
        tabNavigatorStatePatams.onActive()
        this.isCurrentActive = true
      }
    }
  }
  onInactive(){
    this.isCurrentActive = false
    if (this.tabNavigatorState) {
      let tabNavigatorStatePatams = this.tabNavigatorState.routes[this.tabNavigatorState.index].params
      if (tabNavigatorStatePatams) {
        tabNavigatorStatePatams.onInactive()
      }
    }
  }

  render(){
    return(
      <MyTabNavigator 
        ref={navigation => { this.navigation = navigation }}
        onNavigationStateChange={this.onNavigationStateChange.bind(this)}
        screenProps={{
          stackNavigation:this.props.navigation,
        }}/>
    )
  }
  onNavigationStateChange(oldState,newState){
    let oldStatePatams = oldState.routes[oldState.index].params
    let newStatePatams = newState.routes[newState.index].params
    if (oldStatePatams) {
      oldStatePatams.onInactive()
    }
    if (newStatePatams) {
      newState.routes[newState.index].params.onActive()
      this.isCurrentActive = true
      this.tabNavigatorState = newState
    }
  }

}
