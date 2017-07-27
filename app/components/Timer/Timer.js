// This accepts a number (duration) and if it is active, then uses it for countdown.
import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        initialTime: this.props.duration,
        secondsLeft: this.props.duration,
        active: this.props.active
    };
  }

  static defaultProps = {
      initialTime: 30,
      active: false
  }

  tick() {
      if (this.state.active && this.secondsLeft != 0){
        this.setState((prevState) => ({
        secondsLeft: prevState.secondsLeft - 1
        }));
      }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Text>{this.state.secondsLeft}</Text> 
    );
  }
}
