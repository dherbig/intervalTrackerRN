import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Components
import InOutBox from '../InOutBox/InOutBox';


class List extends Component {
    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#d6d7da',
        margin: 20
    },
});

export default List