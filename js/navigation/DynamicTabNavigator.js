/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, createAppContainer,createBottomTabNavigator, BottomTabBar } from "react-navigation";
// import BottomTabBar from 'react-navigation-tabs'
import MyPage from '../page/MyPage'
import FavoritePage from '../page/FavoritePage'
import PopularPage from '../page/PopularPage'
import TrendingPage from '../page/TrendingPage'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import NavigationUtil from '../navigation/util';

const Tabs={ //配置路由
    PopularPage:{
      screen:PopularPage,
      navigationOptions:{
        tabBarLabel:"最热",
        tabBarIcon:({tintColor,focused})=>(
          <MaterialIcons
            name={"whatshot"}
            size={26}
            style={{
              color:tintColor
            }}
          />)

      }
    },
    TrendingPage:{
      screen:TrendingPage,
      navigationOptions:{
        tabBarLabel:"趋势",
        tabBarIcon:({tintColor,focused})=>(
          <Ionicons
            name={"md-trending-up"}
            size={26}
            style={{
              color:tintColor
            }}
          />)
      }
    },
    FavoritePage:{
      screen:FavoritePage,
      navigationOptions:{
        tabBarLabel:"收藏",
        tabBarIcon:({tintColor,focused})=>(
          <MaterialIcons
            name={"favorite"}
            size={26}
            style={{
              color:tintColor
            }}
          />)
      }
    },
    MyPage:{
      screen:MyPage,
      navigationOptions:{
        tabBarLabel:"我的",
        tabBarIcon:({tintColor,focused})=>(
          <Feather
            name={"user"}
            size={26}
            style={{
              color:tintColor
            }}
          />)
      }
    },
  }

export default class DynamicTabNavigator extends Component{// 动态配置导航栏
    constructor(props){
        super(props)
        console.disableYellowBox=true;
    }
  _tabNavigator(){
    const {PopularPage, TrendingPage, FavoritePage,MyPage} =Tabs;
    const tabs={PopularPage, TrendingPage, FavoritePage,MyPage}
    PopularPage.navigationOptions.tabBarLabel="最热"// 动态配置
    return createAppContainer(createBottomTabNavigator(tabs,{
        tabBarComponent
    }));
  }
  render() {
    // NavigationUtil.navigation =this.props.navigation;
    const Tab=this._tabNavigator();
    return <Tab/>
  }
}
class tabBarComponent extends Component{
    constructor(props){
        super(props)
        this.theme={
            tintColor:props.activeTintColor,
            updateTime:new Date().getTime(),
        }
    }
    render(){
      const { routes, index } = this.props.navigation.state;
      if( routes[index].params ) {
        const theme = routes[index].params;
        if (theme&&theme.updateTime > this.theme.updateTime) {
          console.log(theme)
          this.theme = theme
        }
      }
      return  <BottomTabBar
        {...this.props}
        activeTintColor={this.theme.tintColor||this.props.activeTintColor}
        />
    }
}

