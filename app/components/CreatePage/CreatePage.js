import React, { Component } from "react";
import { AppRegistry, Button, Text, TextInput, View } from "react-native";

import Header from '../Common/Header';


export default class CreatePage extends Component{
    constructor(props) {
        super(props);
        this.state= {text:''};
    }

    btnPress(){
        Alert.alert('Alert Ttle', alertMessage,[
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
            {text: 'Ok', onPress: () => console.log('0k Pressed')},
        ])
        
    }
    render(){
        return(
            <View>
                <Header />
                <Text>Workout Name</Text>
                <TextInput
                    style={{height: 20}}
                    placeholder="Workout Name Here"
                    onChangeText={(text) =>this.setState({text}) />
                <Text>Description</Text>  
                <TextInput
                    style={{height: 20}}
                    placeholder="Description (optional)"
                    onChangeText={(text) =>this.setState({text}) />
                <Button
                    onPress={this.btnPress}
                    title="Submit"
                    color="blue"
                    accessibilityLabel="This is a standard button"
            </View>
        )
    }
}
