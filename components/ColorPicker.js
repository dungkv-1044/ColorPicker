import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  Slider,
  Button,
  Alert
} from 'react-native';
import { createStackNavigator, } from 'react-navigation';
import styles from './StyleCommon';
import ColorControl from './ColorControl';

export default class ColorPicker extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    headerStyle: {
      backgroundColor: 'red',
    },
    headerTintColor: 'white'
  };

  constructor(props) {
    super(props);
    this.state = {
      red: 100,
      green: 150,
      blue: 200
    }
  }

  onSliderValueChanged = (color) => {
    this.setState(color)
  }

  returnData(id, name) {
    console.log("id: ", id);
    console.log("name: ", name);
  }

  // renderHeader = () => {
  //   return (
  //     <View style={styles.header}>
  //       <Text style={styles.headerTitle}>Color Picker</Text>
  //     </View>
  //   )
  // }

  render() {
    return (
      <View style={styles.container}>
        {/* {this.renderHeader()} */}
        <View style={styles.body}>
          <View style={styles.subBody}>
            <View style={{ flex: 1 }}>
              <ColorControl title="R" value={this.state.red} onValueChanged={(value) => {
                const currentColor = this.setState;
                const newColor = { ...currentColor, red: value }
                this.onSliderValueChanged(newColor);
              }} />
              <ColorControl title="G" value={this.state.green} onValueChanged={(value) => {
                const currentColor = this.setState;
                const newColor = { ...currentColor, green: value }
                this.onSliderValueChanged(newColor);
              }} />
              <ColorControl title="B" value={this.state.blue} onValueChanged={(value) => {
                const currentColor = this.setState;
                const newColor = { ...currentColor, blue: value }
                this.onSliderValueChanged(newColor);
              }} />

            </View>
            <View style={{ flex: 1, backgroundColor: `rgb( ${this.state.red} , ${this.state.green}, ${this.state.blue})`, borderWidth: 2, borderColor: 'black' }}>

            </View>
            <Button title="Press me" onPress={() => this.props.navigation.push('HOME2', {
              itemNo: 40,
              itemName: 'Sony A6300'
            }, {returnData: this.returnData.bind(this)})} />
          </View>
        </View>

      </View>
    );
  }
}