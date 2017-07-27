// This is the base level component for boxes that display interval and workout information.

import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";

export default class inOutBox extends Component{
    constructor(props){
        super(props);
        this.state={
            name: this.props.name,
            duration: this.props.duration
        }
    }

    static defaultProps = {
        name: 'Rest',
        duration: '30'
    }

    render(){
        return(
            <View>
                <Text>InOutBox Component</Text>
            </View>
        )
    }
}