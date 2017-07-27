import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Header extends Component {
    render() {
        return (
            <View style={styles.head}>
                <Text style={styles.text}>REALLY COOL HEADER NAME</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    head: {
        margin: 20
    },
    text: {
        fontSize: 30
    }
});

export default Header