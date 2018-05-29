import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput, Slider } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import styles from './components/StyleCommon';
import ColorPicker from './components/ColorPicker';
import Home2 from './components/Home2';
import {RootStack} from './components/Router';
export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}