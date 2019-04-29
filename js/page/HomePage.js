/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from "react-navigation";
import MyPage from './MyPage'
import FavoritePage from './FavoritePage'
import PopularPage from './PopularPage'
import TrendingPage from './TrendingPage'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import NavigationUtil from '../navigation/util';
import DynamicTabNavigator from '../navigation/DynamicTabNavigator';

export default class HomePage extends Component{
  
  render() {
    NavigationUtil.navigation =this.props.navigation;
    return <DynamicTabNavigator/>
  } 
}

