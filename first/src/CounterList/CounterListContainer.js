import React from "react";
import CounterListView from "./CounterListView";

class CounterList extends React.Component {
  state = {
    amount: 0
  };
  statepl = () => {
    this.setState({ amount: this.state.amount + 1 });
  };
  statemn = () => {
    this.setState({ amount: this.state.amount - 1 });
  };
  render() {
    return (
      <CounterListView
        statepl={this.statepl}
        statemn={this.statemn}
        amount={this.state.amount}
      />
    );
  }
}

export default CounterList;
