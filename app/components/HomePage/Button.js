import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';


const alertMessage = "This is your message"

class ButtonComponent extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Button
                    title="Create New Workout"
                    color="violet"
                    onPress={() => navigate('Create')}
                />
            </View>
        )
    }
}
export default ButtonComponent;