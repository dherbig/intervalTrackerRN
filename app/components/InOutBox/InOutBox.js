// This is the base level component for boxes that display interval and workout information.

import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";
import Timer from '../Timer/Timer.js';

export default class InOutBox extends Component{
    constructor(props){
        super(props);
        this.state={
            name: this.props.name,
            duration: this.props.duration,
            active: this.props.active
        }
    }

    static defaultProps = {
        name: 'Rest',
        duration: 30,
        active: false,
    }

    render(){
        return(
            <View>
                <Text>{this.props.name}  ------- 
                    <Timer duration = {this.state.duration} active = {this.state.active}/>
                </Text>
            </View>
        )
    }
}
                //<Timer duration={this.state.duration} active='true'> </Timer>