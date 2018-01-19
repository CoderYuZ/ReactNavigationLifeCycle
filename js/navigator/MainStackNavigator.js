import React, {Component} from 'react';
import {
   StyleSheet,
   DeviceEventEmitter,
   Text
 } from 'react-native';

import { StackNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';

const styles = StyleSheet.create({

});

const MyStackNavigator = StackNavigator(
  {
    Main: {screen:MainTabNavigator},
    FirstPage:{screen:require('../page/FirstPage').default},
    SecondPage:{screen:require('../page/SecondPage').default},
    ThirdPage:{screen:require('../page/ThirdPage').default},
  }
);
// const defaultGetStateForAction = MyStackNavigator.router.getStateForAction;
// MyStackNavigator.router.getStateForAction = (action, state) => {
//   if (action.type=='Navigation/NAVIGATE') {
//     let currentState = state.routes[state.index]
//     if (currentState && currentState.params && currentState.params.onInactive) {
//       currentState.params.onInactive()
//     }
//   }else if (action.type=='Navigation/BACK') {
//     let currentState = state.routes[state.index]
//     let lastState = state.routes[state.index-1]
//     if (currentState && currentState.params && currentState.params.onInactive) {
//         currentState.params.onInactive()
//     }
//     if (lastState && lastState.params && lastState.params.onActive) {
//         lastState.params.onActive()
//     }
//   }
//   return defaultGetStateForAction(action, state);
// }

export default class MainStackNavigator extends React.Component {
  render(){
    return(
      <MyStackNavigator
        ref={navigation => { this.navigation = navigation }}
        onNavigationStateChange={this.onNavigationStateChange.bind(this)}
        screenProps={{

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
    }    
  }
}
