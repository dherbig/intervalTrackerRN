import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { StackNavigator } from 'react-navigation';

import HomePage from './app/components/HomePage/HomePage';
import CreatePage from './app/components/CreatePage/CreatePage';


const App = StackNavigator({
  Home: { screen: HomePage },
  Create: { screen: CreatePage }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;