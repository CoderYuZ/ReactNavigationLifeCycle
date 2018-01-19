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

let tabNavigatorState
let isCurrentActive

export default class MainTabNavigator extends MyLifeCyclePage {

  onActive(){
    if (tabNavigatorState && !isCurrentActive) {
      let tabNavigatorStatePatams = tabNavigatorState.routes[tabNavigatorState.index].params
      if (tabNavigatorStatePatams) {
        tabNavigatorStatePatams.onActive()
        isCurrentActive = true
      }
    }
  }
  onInactive(){
    isCurrentActive = false
    if (tabNavigatorState) {
      let tabNavigatorStatePatams = tabNavigatorState.routes[tabNavigatorState.index].params
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
      isCurrentActive = true
      tabNavigatorState = newState
    }
  }

}
