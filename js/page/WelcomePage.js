/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import NavigationUtil from '../navigation/util'
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
    createAppContainer,
    createMaterialTopTabNavigator,
    createBottomTabNavigator,
    createStackNavigator,
    createSwitchNavigator
} from "react-navigation";
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class WelcomePage extends Component<Props> {
    componentDidMount(){
      const { navigation }=this.props;
        this.timer = setTimeout(()=>{//创建定时器
          NavigationUtil.resetToHomePage({
            navigation
          })
        },500)
    }
    componentWillMount(){
        this.timer&&clearTimeout(this.timer)//清除定时器
    }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome !</Text>
      </View>
    );
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
