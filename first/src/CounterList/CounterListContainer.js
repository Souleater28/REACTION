import React from "react";
import CounterListView from "./CounterListView";

class CounterList extends React.Component {
  state = {
    boolshit: null,
    amount: 0
  };
  amountpl = () => {
    this.setState({ amount: this.state.amount + 1 });
    this.setState({ boolshit: true });
  };
  amountmn = () => {
    if (this.state.amount !== 0) {
      this.setState({ amount: this.state.amount - 1 });
      this.setState({ boolshit: false });
    }
  };
  render() {
    return (
      <CounterListView
        boolshit={this.state.boolshit}
        amountpl={this.amountpl}
        amountmn={this.amountmn}
        amount={this.state.amount}
      />
    );
  }
}

export default CounterList;
