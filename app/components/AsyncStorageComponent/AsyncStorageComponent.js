import React, { Component } from "react";
import { AppRegistry, Text, View, AsyncStorage, TextInput } from "react-native";

export default class AsyncStorageComponent extends Component{
    constructor(){
        super();
        this.state={
            name: ''
        }
    }

    saveName(value){
        AsyncStorage.setItem('name', value);
        this.setState({name: value})
    }
    
    componentWillMount(){
        this.getName();
    }

    getName(){
        AsyncStorage.getItem('name').then((value) => {
            this.setState({name: value});
        })

    }

    render(){
        return(
            <View>
                <Text>AsyncStorage Component</Text>
                <TextInput
                    placeholder="Type Name"
                    onSubmitEditing={(e) => this.saveName(e.nativeEvent.text)}
                />
            </View>
        )
    }
}