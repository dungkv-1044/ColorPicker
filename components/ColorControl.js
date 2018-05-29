import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput, Slider } from 'react-native';
import styles from './StyleCommon'
export default class ColorControl extends React.Component {

    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <View style={styles.slideView}>
          <Text>{this.props.title}</Text>
          <Slider onValueChange={(value) => {
            this.props.onValueChanged(value);
          }} value={this.props.value} step={1} minimumValue={0} maximumValue={255} style={styles.slider} />
          <View>
            <TextInput value={`${this.props.value}`} style={styles.textInput} />
          </View>
        </View>
      );
    }
  }