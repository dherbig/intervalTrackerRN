import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Components
import Header from '../Common/Header';
import List from '../Common/List';

class HomePage extends Component {
    render() {
        return (
            <View>
                <Header />
                <List />
            </View>
        )
    }
}

export default HomePage;