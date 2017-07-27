import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './app/components/HomePage/HomePage'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HomePage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
