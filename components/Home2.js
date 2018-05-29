import React from 'react';
import {createStackNavigator} from 'react-navigation';
import { View, Text, Button } from 'react-native';
export default class Home2 extends React.Component {
    
    render() {
        const { navigation } = this.props;
        const itemNo = navigation.getParam('itemNo', 'NO-ID');
        const itemName = navigation.getParam('itemName', 'No name');
        return(
            <View style={{ flex: 1, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}> 
                <Text> No: {JSON.stringify(itemNo)}</Text>
                <Text> Name: {JSON.stringify(itemName)}</Text>
                <Button title="Back" onPress={() =>
                    this.props.navigation.goBack()} />
            </View>
        )
    }
}