import {
  createStackNavigator, 
    createAppContainer,
    createMaterialTopTabNavigator, 
    createBottomTabNavigator, 
    createDrawerNavigator,
    DrawerItems,
    createSwitchNavigator
} from "react-navigation";
import WelcomePage from './js/page/WelcomePage';
import HomePage from './js/page/HomePage'
import DetailPage from './js/page/DetailPage'
import React, {Component} from 'react';
const InitNavigator = createStackNavigator({
  WelcomePage: {
      screen: WelcomePage,
      navigationOptions: {
        header: null,
    }
  }
},{
  navigationOptions: {
      // header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
  }
})

const MainNavigator = createStackNavigator({
  WelcomePage: {
      screen: HomePage,
      navigationOptions: {
          header: null,
      }
  },
  DetailPage: {
      screen: DetailPage,
      navigationOptions: {
        title: 'DetailPage',
        headerBackTitle: null
          // header: null,
      }
  }
})
const AppNavigator = createAppContainer(createSwitchNavigator({
  Init: InitNavigator,
  Main: MainNavigator,
}, {
  initialRouteName: 'Init',
}))
export default class App extends React.Component {
  render() {
      return <AppNavigator /> ;
  }
}