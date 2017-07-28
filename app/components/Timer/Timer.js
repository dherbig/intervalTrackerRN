// This accepts a number (duration) and if it is active, then uses it for countdown.

// Imports
import React, { Component } from "react";
import { AppRegistry, Text, StyleSheet } from "react-native";

export default class Timer extends Component {
  // Setup.  
  constructor(props) {
    super(props);

    // These variables hold the state attributes that we are tracking.
    this.state = {
      // This is saying that the attributes take whatever values they are passed by their props on construction.
      initialTime: this.props.duration,
      secondsLeft: this.props.duration,
      // 'active', in this case, tells the counter if it should start counting down or not.
      active: this.props.active,
      // This holds our styling variable.
    };
  }

  // These are the default values for when any particular prop is missing.
  static defaultProps = {
      initialTime: 30,
      active: false,
  };

  // This runs once per second, if the component is active.
  tick() {
    // If the timer reaches zero, turn the setInterval call (below) off so it stops counting.
    if (this.state.secondsLeft === 1){
      this.setState((prevState) => {
        this.state.active = false;
        this.state.lifecycle = 'finished';
      });
      clearInterval(this.interval);
    }

    // Given the previous state, change the current state so that...
    this.setState((prevState) => ({
      // our 'secondsLeft' variable becomes 1 less than the previous state (aka count down by 1)
      secondsLeft: prevState.secondsLeft - 1
    }));


    
  }

  // This runs if the timer loads properly
  componentDidMount() {
    // Sets the currentStyle to staticOrInactive
    this.setState((prevState) => {
      this.state.lifecycle = 'staticOrInactive';
    })
    // Checks to see if the timer is active, 
    if (this.state.active){
      // Sets the number style to 'active'
      this.setState((prevState) => {
        this.state.lifecycle = 'active';
      })
      // and if so, tells it to run 'tick()' once every 1000 ms (1/second).
      this.interval = setInterval(() => this.tick(), 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let textColor;
    switch (this.state.lifecycle){
      case 'staticOrInactive':
        textColor = styles.staticOrInactive;
        break;
      case 'active':
        textColor = styles.active
        break;
      case "finished":
        textColor = styles.finished;
        break;
    }

    return (
      <Text style={textColor}>{this.state.secondsLeft}</Text> 
    );
  }
};

// This section defines how the timer is styled.
const styles = StyleSheet.create({
  active: {
    color: "crimson"
  },
  staticOrInactive:{
    color: 'dodgerblue'
  },
  finished: {
    color: "green"
  }
});