/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, createAppContainer ,createMaterialTopTabNavigator } from "react-navigation";
import NavigationUtil from '../navigation/util';

export default class PopularPage extends Component{
  constructor(props){
    super(props)
    console.disableYellowBox = true;
    this.tabNames=['java', 'android', 'ios','react', 'react native', 'php']
  }
  gebTab(){
    const Tabs = [];
    this.tabNames.forEach((item,i) => {
      Tabs[`tab${i}`]={
        screen:props=><PopularTab
          {...props} tabLabel = {item}
        />,
        navigationOptions:{
          title:item,
        }
      }
    })
    return Tabs;
  }
  render() {
    const TabNavigator =createAppContainer(createMaterialTopTabNavigator(//top栏
       this.gebTab(),{
         tabBarOptions:{//设置头部样式
           tabStyle:styles.tabStyle,
           upperCaseLabel:false, // 强制大写 ，默认为true
           scrollEnabled:true, // 可不可以滚动 ，默认为true
           style:{ // 背景样式
             backgroundColor:'#678'
           },
           indicatorStyle:styles.indicatorStyle,// 滑块样式
           labelStyle:styles.labelStyle //文字样式
         }
       }
    ))
    return <View style={{flex:1,marginTop:40}}>
          <TabNavigator/>
          </View>
    
  }
}

 class PopularTab extends Component{
  
  render() {
    const { tabLabel } = this.props;
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{tabLabel}</Text>
        <Text onPress={()=>{
          NavigationUtil.goPage({
            navigation:this.props.navigation
          },"DetailPage")
        }}>跳转到详情页</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  tabStyle:{
    minWidth: 50,

  },
  indicatorStyle:{
    height: 2,
    backgroundColor:"white"

  },
  labelStyle:{
    fontSize: 13,
    marginTop: 6,
    marginBottom:6,
    
  }
  
});
