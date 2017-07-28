import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Components


class CreatePage extends Component {
    static navigationOptions = {
        title: 'Create New Workout',
    };
    render() {
        return (
            <View>
                <Text>Create Page</Text>
            </View>
        )
    }
}

export default CreatePage;