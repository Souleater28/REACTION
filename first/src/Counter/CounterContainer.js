import React from "react";
import Counter from "./Counter";
class Count extends React.Component {
  state = {
    times: 0,
    isOpen: false
  };
  statepl = () => {
    this.setState({ times: this.state.times + 1 });
  };
  statemn = () => {
    this.setState({ times: this.state.times - 1 });
  };
  render() {
    return (
      <Counter
        statepl={this.statepl}
        statemn={this.statemn}
        times={this.state.times}
      />
    );
  }
}

export default Count;
